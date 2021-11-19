import saveDataInStorage from "@/utils/storage/saveDataInStorage";
const saveJSONInStorage = (key:string, data:any) => {
    saveDataInStorage(key, JSON.stringify( data ) );
}
export default saveJSONInStorage;
