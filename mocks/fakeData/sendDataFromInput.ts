export const sendDataFromInput = (value:string) => new Promise((resolve, reject) => {
  const success = !((Math.random() > 0.99));
  setTimeout(() => {
    if (success) {
      resolve(value);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('BackEnd error');
    }
  }, (Math.random() * (500 - 200) + 200));
});
