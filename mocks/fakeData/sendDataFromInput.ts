export const sendDataFromInput = (value:string) => new Promise((resolve, reject) => {
  const success = !((Math.random() > 1));
  setTimeout(() => {
    if (success) {
      resolve(value);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('BackEnd error');
    }
  }, (Math.random() * (300 - 100) + 100));
});
