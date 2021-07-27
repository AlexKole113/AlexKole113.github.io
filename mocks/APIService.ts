import { sendDataFromInput } from './fakeData/sendDataFromInput';
import { getProductsByCategoryID, getCategories } from './fakeData/shop';
import { getThemeByID, getThemeByPath } from './fakeData/themes';
import getTestUser from './fakeData/testUser';

class IApi {
  static sendDataFromInput: (value:string) => Promise<any>;

  static getProductsByCategoryID: (id:number|null) => Promise<any>;

  [key:string]:any
}

class APIService implements IApi {
  static sendDataFromInput = (value:string) => sendDataFromInput(value);

  static getProductsByCategoryID = (id:number|null = 1) => getProductsByCategoryID(id);

  static getThemeByID = (id:number|string|null = 1) => getThemeByID(id);

  static getUserByID = (id:string) => getTestUser(id);

  static getThemeByPath = (path:string|null) => getThemeByPath(path);

  static getCategories = () => getCategories();
}

export default APIService;
