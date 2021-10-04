import { sendDataFromInput } from './fakeData/sendDataFromInput';
import {
    getProductsByCategoryID,
    getCategories,
    searchInProducts,
    getProductByID,
    searchByKeywordInFields
} from './fakeData/shop';
import { getThemeByID, getThemeByPath } from './fakeData/themes';
import getTestUser from './fakeData/testUser';
import getAllProductsSlice from "@/utils/getAllProductsSlice";
import { IFakeShopCategories, } from './fakeData/shop';

class IApi {
  static sendDataFromInput: (value:string) => Promise<any>;

  static getProductsByCategoryID: (id:number|null) => Promise<any>;

  [key:string]:any
}

class APIService implements IApi {

  static getProductByID = (id:string|null ) => getProductByID(id)

  static searchByKeywordInFields = ( keyword:string, fields:string[] ) => searchByKeywordInFields(keyword, fields)

  static getProductsByCategoryID = (id:number|null = 1) => getProductsByCategoryID(id);

  static getThemeByID = (id:number|string|null = 1) => getThemeByID(id);

  static getUserByID = (id:string) => getTestUser(id);

  static getThemeByPath = (path:string|null) => getThemeByPath(path);

  static getCategories = () => getCategories();

  static getAllProductsSlice = (cats:IFakeShopCategories) => getAllProductsSlice(cats)

  static fastSearchInProducts = (value:string, limit = 9) => searchInProducts(value, limit)

  static sendDataFromInput = (obj:{data:[{[key:string]:any}, string, string, string|number|boolean]}) => sendDataFromInput(obj);

}

export default APIService;
