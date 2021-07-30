import inputCss from '@/components/InputControl/styles/index.scss';
import { FormEvent } from 'react';
import { validateProfileInput } from '@/utils/validators/validateProfileInput';
import { trottler } from '@/utils/trottler';
import { IInputCotrol } from '@/components/InputControl/IInputCotrol';

const InputSingle = ({
  name, value, type, blockState, blockSetState, sendAndChooseState,
}:{name:string, value:string, type:string, blockState:IInputCotrol, blockSetState:CallableFunction, sendAndChooseState:any}) => {
  const enteredValue = (e:FormEvent) => {
    const { value } = e.target as HTMLInputElement;

    if (!value) {
      sendAndChooseState({ state: 'loading', message: '', value: '' });
      return;
    }

    if (!validateProfileInput(value)) {
      blockSetState((state:IInputCotrol) => ({ ...state, state: 'invalid', message: 'invalid value' }));
      return;
    }

    trottler(() => { sendAndChooseState({ state: 'loading', message: '', value }); }, value);
  };

  const focus = () => {
    if (blockState.value) blockSetState((state:IInputCotrol) => ({ ...state, state: 'received' }));
  };

  return <input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} onFocus={focus} />;
};

export default InputSingle;
