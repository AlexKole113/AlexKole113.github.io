const saveDataInStorage = (key:string, data:any) => {
  // eslint-disable-next-line no-param-reassign
  if (typeof data !== 'string') data = JSON.stringify(data);
  window.localStorage.setItem(key, data);
};
export default saveDataInStorage;
