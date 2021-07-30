import inputCss from '@/components/InputControl/styles/index.scss';
import { FormEvent } from 'react';
import { validateProfileInput } from '@/utils/validators/validateProfileInput';
import { trottler } from '@/utils/trottler';
import { IInputCotrol } from '@/components/InputControl/IInputCotrol';

const InputCreditCard = ({
  name, value, type, blockState, blockSetState, sendAndChooseState,
}:{name:string, value:string, type:string, blockState:IInputCotrol, blockSetState:CallableFunction, sendAndChooseState:any}) => {
  console.log(name);

  // TODO: Create payment input + card expires input
  // const acceptedCreditCards = {
  //   visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  //   mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  //   diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  // };

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

  switch (name) {
    case 'number':
      return (<input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
    case 'date':
      return (<input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
    case 'cvv':
      return (<input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
    default:
      return (<input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
  }
};

export default InputCreditCard;
