interface IValidatorsMap {
  [key:string]: {
    [key:string]: RegExp
  }
}

const defaultAccept = /[^~,][^~,]*/;
const validatorsMap:IValidatorsMap = {
  profile: {
    name: /^[a-z ,.'-]+$/i,
    phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    // eslint-disable-next-line no-control-regex,max-len
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  },
  address: {
    streetHouse: defaultAccept,
    countyCity: defaultAccept,
  },
};

export const validateProfileInput = (data:any, groupName:string, name:string) => {
  if (typeof validatorsMap[groupName][name] !== 'undefined') {
    return (validatorsMap[groupName][name]).test(data);
  }
  return (defaultAccept).test(data);
};
