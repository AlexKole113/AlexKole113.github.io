import inputCss from '@/components/InputControl/styles/index.scss';
import { FormEvent, useEffect } from 'react';
import { validateProfileInput } from '@/utils/validators/validateProfileInput';
import { trottler } from '@/utils/trottler';
import { IInputCotrol } from '@/components/InputControl/IInputCotrol';
import { userInfoAction } from '@/actions/user';
import { useDispatch } from 'react-redux';

const InputSingle = ({
  groupName, name, value, type, blockState, blockSetState, sendAndChooseState, userData,
}:{groupName:string, name:string, value:string, userData:{[key:string]:any}, type:string, blockState:IInputCotrol, blockSetState:CallableFunction, sendAndChooseState:any}) => {
  const dispatch = useDispatch();
  const enteredValue = (e:FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (!value) {
      sendAndChooseState({ state: 'received', message: '', value: '' });
      return;
    }
    if (!validateProfileInput(value)) {
      blockSetState((state:IInputCotrol) => ({ ...state, state: 'invalid', message: 'invalid value' }));
      return;
    }
    trottler(() => {
      sendAndChooseState({ state: 'loading', message: '', value });

      const updatedUser = JSON.parse(JSON.stringify(userData.data));
      updatedUser[groupName][name] = value;

      dispatch(userInfoAction.request({ params: { data: updatedUser } }));
    }, value);
  };

  const focus = () => {
    if (blockState.value) blockSetState((state:IInputCotrol) => ({ ...state, state: 'received' }));
  };

  useEffect(() => {
    if (userData.hasError) {
      sendAndChooseState({ state: '', message: '', value: '' });
    } else {
      sendAndChooseState({ state: 'received', message: '' });
    }
  }, [userData]);

  return <input name={name} className={inputCss['input-control__input']} value={value} type={type} onChange={enteredValue} onFocus={focus} />;
};

export default InputSingle;
