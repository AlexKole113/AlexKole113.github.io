import { useEffect, useState } from 'react';
import { IInputCotrol } from '@/components/InputControl/IInputCotrol';

const useInputControlState = (userData:{[key:string]:any}, groupName:string, name:string) => {
  const userDataFromStore = (typeof userData.data[groupName][name] === 'undefined') ? ((groupName === 'payments') ? userData.data[groupName].cards[0][name] : '') : userData.data[groupName][name];
  const [state, setState] = useState<IInputCotrol>({ state: userDataFromStore ? 'received' : '', message: '', value: userDataFromStore });

  useEffect(() => {
    const { value, state: statement } = state;
    if (!value && (statement !== '')) {
      setState((prevState) => ({ ...prevState, state: '' }));
    }
  }, [state.value]);
  return useState<IInputCotrol>({ state: userDataFromStore ? 'received' : '', message: '', value: userDataFromStore });
};

export default useInputControlState;
