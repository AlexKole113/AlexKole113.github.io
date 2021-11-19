import { useDispatch, useSelector } from 'react-redux';
import User from '@/user/User';
import { userStateSelector } from '@/selectors/user';
import { userCreateAction, userInfoAction } from '@/actions/user';
import { useEffect } from 'react';

const withUserData = (Component:(props:any) => JSX.Element|null) => (props:any) => {
  let { userInfo: userInStore, userCreate: newUser } = useSelector(userStateSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof userInStore.data.id === 'undefined') {
      const userWasRegistered = User.wasRegistered();
      if (userWasRegistered) {
        dispatch(userInfoAction.request({ data: userWasRegistered }));
      } else {
        dispatch(userCreateAction.request());
      }
    }
  }, [userInStore.data.id, ]);

  return (<Component {...props} userData={ (userInStore.data.id) ? userInStore : newUser  } />);
};
export default withUserData;
