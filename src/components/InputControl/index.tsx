import ClearIcon from '@/components/InputControl/components/ClearIcon';
import SuccessIcon from '@/components/InputControl/components/SuccessIcon';
import InvalidIcon from '@/components/InputControl/components/InvalidIcon';
import withUserData from '@/hocs/withUserData';

import profileCss from '@/pages/Profile/styles/index.scss';
import InputCreditCard from '@/components/InputCreditCard';
import InputSingle from '@/components/InputSingle';
import useInputControlState from '@/hooks/useInputControlState/useInputControlState';
import { sendDataFromInput } from '../../../mocks/fakeData/sendDataFromInput';
import inputCss from './styles/index.scss';
import buttonSpinner from './assets/preloader-for-btn.gif';

const InputControl = ({
  groupName, name, type, placeholder, userData,
}:{groupName:string, name:string, type:string, placeholder:string, userData:{[key:string]:any} }) => {
  if (!userData.data[groupName]) return null;

  const [state, setState] = useInputControlState(userData, groupName, name);

  // TODO: replace to dispatch
  // TODO: fix bug with delete value and not correct validation
  const sendAndChooseState = (newState:{ state : string, message: string, value: string }) => {
    setState((prevState) => ({ ...prevState, ...newState }));
    sendDataFromInput(newState.value)
      .then((value) => {
        if (!value) {
          setState({ state: '', message: '', value: '' });
          return;
        }

        setState((state) => ({ ...state, state: 'received', message: '' }));
      })
      .catch((message) => {
        setState((state) => ({ ...state, state: 'invalid', message }));
      });
  };

  const clear = () => { sendAndChooseState({ state: 'loading', message: '', value: '' }); };

  // visualisation
  const iconsCollection = new Map([
    ['received', <ClearIcon onClickFunc={clear} />],
    ['success', <SuccessIcon />],
    ['invalid', <InvalidIcon />],
    ['loading', <img src={buttonSpinner} alt="loader" />],
  ]);
  const icon = iconsCollection.get(state.state) ?? '';
  const labelClassName = (state.state !== '') ? inputCss['field-has-content'] : '';
  const cssStateClass = inputCss[`state-${state.state}`] ?? '';
  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`${inputCss['input-control']} ${inputCss['with-placeholder-movement']} ${inputCss['profile-input']} ${profileCss['profile-input']} ${cssStateClass}`}>
      {
        (groupName === 'payments') ? (
          <InputCreditCard
            name={name}
            value={state.value}
            type={type}
            blockState={state}
            blockSetState={setState}
            sendAndChooseState={sendAndChooseState}
          />
        ) : (
          <InputSingle
            name={name}
            value={state.value}
            type={type}
            blockState={state}
            blockSetState={setState}
            sendAndChooseState={sendAndChooseState}
          />
        )
      }
      <span className={`${inputCss['input-control__placeholder']}  ${labelClassName} `}>{ (state.message) ? state.message : placeholder}</span>
      <span className={inputCss['input-control__state']}>
        {icon}
      </span>
    </label>
  );
};

export default withUserData(InputControl);
