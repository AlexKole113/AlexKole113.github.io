import User from '@/user/User';
import saveDataInStorage from '@/utils/storage/saveDataInStorage';

const getNewUser = () => {
  const user = new User();
  saveDataInStorage('userID', user.userData.id);
  return user.userData;
};

export default getNewUser;
