import ClearIcon from '@/components/InputControl/components/ClearIcon';
import SuccessIcon from '@/components/InputControl/components/SuccessIcon';
import InvalidIcon from '@/components/InputControl/components/InvalidIcon';
import withUserData from '@/hocs/withUserData';
import InputSingle from '@/components/InputSingle';
import useInputControlState from '@/hooks/useInputControlState/useInputControlState';
import InputCreditCard from '@/components/InputCreditCard';
import profileCss from '@/pages/Profile/styles/index.scss';

import inputCss from './styles/index.scss';
import buttonSpinner from './assets/preloader-for-btn.gif';

const InputControl = ({
  groupName, name, type, placeholder, userData,
}:{groupName:string, name:string, type:string, placeholder:string, userData:{[key:string]:any} }) => {
  if (!userData.data[groupName]) return null;

  const [state, setState] = useInputControlState(userData, groupName, name);
  const sendAndChooseState = (newState:{ state : string, message: string, value: string }) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const clear = () => { sendAndChooseState({ state: 'received', message: '', value: '' }); };

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

  console.log(1, userData.data.profile);

  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`${inputCss['input-control']} ${inputCss['with-placeholder-movement']} ${inputCss['profile-input']} ${profileCss['profile-input']} ${cssStateClass}`}>
      {
        (groupName === 'payments' && name === 'cc-card') ? (
          <InputCreditCard />
        ) : (
          <InputSingle
            userData={userData}
            groupName={groupName}
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
