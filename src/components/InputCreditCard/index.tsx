// @ts-ignore
import CreditCardInput from 'react-credit-card-input';
import { FormEvent, useState } from 'react';

import ClearIcon from '@/components/InputControl/components/ClearIcon';
import SuccessIcon from '@/components/InputControl/components/SuccessIcon';
import InvalidIcon from '@/components/InputControl/components/InvalidIcon';
import buttonSpinner from '@/components/InputControl/assets/preloader-for-btn.gif';
import inputCss from './styles/index.scss';

const InputCreditCard = () => {
  const [data, setData] = useState({
    number: '',
    expires: '',
    cvc: '',
    state: 'received',
  });

  const sendAndUpdateData = () => {
    // use special service
    setData((prevState) => ({ ...prevState, state: 'received' }));
  };

  const creditCardNumberUpdate = (e:FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    // @ts-ignore
    setData((prevState) => ({
      ...prevState,
      number: value,
      state: 'loading',
    }));
    sendAndUpdateData();
  };

  const creditCardExpiresUpdate = (e:FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setData((prevState) => ({
      ...prevState,
      expires: value,
      state: 'loading',
    }));

    sendAndUpdateData();
  };

  const creditCardCVCUpdate = (e:FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    // @ts-ignore
    setData((prevState) => ({
      ...prevState,
      cvc: value,
      state: 'loading',
    }));
    sendAndUpdateData();
  };

  const clear = () => {
    // @ts-ignore
    setData(() => ({
      number: '',
      expires: '',
      cvc: '',
    }));
    sendAndUpdateData();
  };

  const iconsCollection = new Map([
    ['received', <ClearIcon onClickFunc={clear} />],
    ['success', <SuccessIcon />],
    ['invalid', <InvalidIcon />],
    ['loading', <img src={buttonSpinner} alt="loader" />],
  ]);
  const icon = iconsCollection.get(data.state) ?? '';

  return (
    <>
      <CreditCardInput
        cardNumberInputProps={{ value: data.number, onChange: creditCardNumberUpdate }}
        cardExpiryInputProps={{ value: data.expires, onChange: creditCardExpiresUpdate }}
        cardCVCInputProps={{ value: data.cvc, onChange: creditCardCVCUpdate }}
        fieldClassName={inputCss['credit-card-input']}
        containerClassName={inputCss.containerClassName}
        dangerTextClassName={inputCss.dangerTextClassName}
        inputClassName={inputCss.inputClassName}
        invalidClassName={inputCss.invalidClassName}
      />
      <span data-test={``} className={inputCss['input-control__state']}>
        {icon}
      </span>
    </>
  );
};

export default InputCreditCard;
