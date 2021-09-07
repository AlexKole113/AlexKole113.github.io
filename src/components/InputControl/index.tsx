import ClearIcon from '@/components/InputControl/components/ClearIcon';
import SuccessIcon from '@/components/InputControl/components/SuccessIcon';
import InvalidIcon from '@/components/InputControl/components/InvalidIcon';

import InputSingle from '@/components/InputSingle';
import useInputControlState from '@/hooks/useInputControlState/useInputControlState';
import InputCreditCard from '@/components/InputCreditCard';
import profileCss from '@/pages/Profile/styles/index.scss';

import inputCss from './styles/index.scss';
import buttonSpinner from './assets/preloader-for-btn.gif';

const InputControl = ({
  groupName, name, type, placeholder, userData, dataUpdate,
}:{groupName:string, name:string, type:string, placeholder:string, userData:{[key:string]:any}, dataUpdate:CallableFunction }) => {
  if (!userData[groupName]) return null;
  const [inputState, setInputState] = useInputControlState(userData, groupName, name);
  const chooseFieldState = (newState:{ state : string, value: string }) => {
    setInputState((prevState) => ({ ...prevState, ...newState }));
  };
  const clear = () => { chooseFieldState({ state: '', value: '' }); };
  // visualisation
  const iconsCollection = new Map([
    ['received', <ClearIcon onClickFunc={clear} />],
    ['success', <SuccessIcon />],
    ['invalid', <InvalidIcon />],
    ['loading', <img src={buttonSpinner} alt="loader" />],
  ]);
  const icon = iconsCollection.get(inputState.state) ?? '';
  const labelClassName = (inputState.state !== '') ? inputCss['field-has-content'] : '';
  const cssStateClass = inputCss[`state-${inputState.state}`] ?? '';

  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`${inputCss['input-control']} ${inputCss['with-placeholder-movement']} ${inputCss['profile-input']} ${profileCss['profile-input']} ${cssStateClass}`}>
      {
        (groupName === 'payments' && name === 'cc-card') ? (
          <InputCreditCard />
        ) : (
          <InputSingle
            groupName={groupName}
            name={name}
            value={inputState.value}
            type={type}
            blockSetState={setInputState}
            chooseFieldState={chooseFieldState}
            dataUpdate={dataUpdate}
          />
        )
      }
      <span className={`${inputCss['input-control__placeholder']}  ${labelClassName} `}>{ (inputState.message) ? inputState.message : placeholder}</span>
      {
        inputState.value?.length ? (
          <span data-test={inputState.state} className={inputCss['input-control__state']}>
            {icon}
          </span>
        ) : ''
      }
    </label>
  );
};

export default InputControl;
