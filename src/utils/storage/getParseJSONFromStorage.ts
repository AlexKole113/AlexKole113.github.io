import getDataFromStorage from "@/utils/storage/getDataFromStorage";
const getParseJSONFromStorage = (key:string) => JSON.parse(<string>getDataFromStorage(key) )
export default getParseJSONFromStorage;
