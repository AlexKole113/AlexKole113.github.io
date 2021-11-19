import inputCss from '@/components/InputControl/styles/index.scss';
import { FormEvent } from 'react';
import { validateProfileInput } from '@/utils/validators/validateProfileInput';
import { IInputCotrol } from '@/components/InputControl/IInputCotrol';

const InputSingle = ({
  groupName, name, value, type, blockSetState, chooseFieldState, dataUpdate,
}:{groupName:string, name:string, value:string, type:string, blockSetState:CallableFunction, dataUpdate:CallableFunction, chooseFieldState:CallableFunction}) => {
  const enteredValue = (e:FormEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { value } = e.target as HTMLInputElement;
    if (!value) {
      chooseFieldState({ state: 'received', message: '', value: '' });
      return;
    }
    if (!validateProfileInput(value, groupName, name)) {
      blockSetState((state:IInputCotrol) => ({ ...state, state: 'invalid' }));
    } else {
      blockSetState((state:IInputCotrol) => ({ ...state, state: 'received' }));
    }
    chooseFieldState({ value });
    dataUpdate(groupName, name, value);
  };

  return <input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} />;
};

export default InputSingle;
