import User from '@/user/User';
import APIService from '../../../mocks/APIService';

const getUserDataFromServer = () => {
  let user;
  const dataFromServer = APIService.getUserByID(`${User.wasRegistered()}`);
  if (dataFromServer) {
    user = new User(dataFromServer);
  } else {
    user = new User();
  }
  return user.userData;
};

export default getUserDataFromServer;
