import { useDispatch, useSelector } from 'react-redux';
import User from '@/user/User';
import saveDataInStorage from '@/utils/storage/saveDataInStorage';
import { userStateSelector } from '@/selectors/user';
import { userInfoAction } from '@/actions/user';
import APIService from '../../mocks/APIService';

const withUserData = (Component:(props:any) => JSX.Element|null) => (props:any) => {
  if (typeof Component === null) return null;
  const { userInfo: userInStore } = useSelector(userStateSelector);

  if (typeof userInStore.data.id === undefined) {
    const dispatch = useDispatch();
    let user;
    if (User.checkUser()) {
      // TODO: dispatch -> get user data from server
      const dataFromServer = APIService.getUserByID(`${User.checkUser()}`);
      if (dataFromServer) {
        user = new User(dataFromServer);
      } else {
        user = new User();
      }
    } else {
      // TODO: dispatch -> new user creator
      user = new User();
      saveDataInStorage('userID', user.userData.id);
    }
  }

  return (<Component {...props} userData={userInStore} />);
};
export default withUserData;
