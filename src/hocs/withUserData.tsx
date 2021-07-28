import { useDispatch, useSelector } from 'react-redux';
import User from '@/user/User';
import { userStateSelector } from '@/selectors/user';
import { userCreateAction, userInfoAction } from '@/actions/user';

const withUserData = (Component:(props:any) => JSX.Element|null) => (props:any) => {
  if (typeof Component === null) return null;
  const { userInfo: userInStore } = useSelector(userStateSelector);
  if (typeof userInStore.data.id === 'undefined') {
    const dispatch = useDispatch();
    const userWasRegistered = User.wasRegistered();
    if (userWasRegistered) {
      dispatch(userInfoAction.request({ data: userWasRegistered }));
    } else {
      dispatch(userCreateAction.request());
    }
  }
  return (<Component {...props} userData={userInStore} />);
};
export default withUserData;
