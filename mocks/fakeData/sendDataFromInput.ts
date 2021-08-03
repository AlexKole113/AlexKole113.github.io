export const sendDataFromInput = ({ data }:{data:[{[key:string]:any}, string, string, any]}) => {
  const [userInfo, groupName, field, value] = data;
  if (!groupName || !field || !userInfo[groupName][field]) return null;
  userInfo[groupName][field] = value;

  // ...data send
};
