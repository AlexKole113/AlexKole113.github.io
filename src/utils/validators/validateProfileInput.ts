export const validateProfileInput = (data:string, valuesMap:{[key:string]:RegExp} = { accept: /[^~,][^~,]*/ }) => {
  if (typeof data !== 'string') return false;
  for (const key in valuesMap) {
    console.log(valuesMap[key]);
    if (valuesMap[key].test(data)) return true;
  }

  return false;
};
