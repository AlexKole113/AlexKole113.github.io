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
  const acceptedCreditCardNumbers = {
    visa: /^\d+$/,
    mastercard: /^\d+$/,
    diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  };

  const acceptedDateExpr = {
    accept: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
  };

  const acceptedCvv = {
    accept: /^\d+$/,
  };
  const acceptedName = {
    accept: /(?<! )[-a-zA-Z' ]{2,26}/,
  };

  const enteredValue = (e:FormEvent) => {
    const { value } = e.target as HTMLInputElement;

    if (!value) {
      sendAndChooseState({ state: 'loading', message: '', value: '' });
      return;
    }

    const validatorPattern = (name === 'number') ? acceptedCreditCardNumbers : (name === 'date') ? acceptedDateExpr : (name === 'cvv') ? acceptedCvv : acceptedName;

    if (!validateProfileInput(value, validatorPattern)) {
      blockSetState((state:IInputCotrol) => ({
        ...state, value, state: 'invalid', message: 'invalid value',
      }));
      return;
    }

    trottler(() => { sendAndChooseState({ state: 'loading', message: '', value }); }, value);
  };

  const focus = () => {
    if (blockState.value) blockSetState((state:IInputCotrol) => ({ ...state, state: 'received' }));
  };

  switch (name) {
    case 'number':
      return (<input name={name} className={inputCss['input-control__input']} maxLength={15} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
    case 'date':
      return (<input name={name} className={inputCss['input-control__input']} maxLength={5} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
    case 'cvv':
      return (<input name={name} className={inputCss['input-control__input']} maxLength={3} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
    default:
      return (<input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} onFocus={focus} />);
  }
};

export default InputCreditCard;
