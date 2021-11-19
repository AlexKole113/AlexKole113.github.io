const getThemeByID = (id:number|string|null = 1, delay = 200) => {
  const themes = new Map([
    ['1', [[238, 196, 153], [255, 102, 163]]],
    ['2', [[162, 204, 114], [70, 130, 27]]],
    ['3', [[183, 248, 219], [80, 167, 194]]],
    ['4', [[255, 88, 88], [240, 152, 25]]],
    ['flowers-theme', [[238, 196, 153], [255, 102, 163]]],
    ['settings-theme', [[80, 142, 255], [189, 148, 251]]],
    ['profile-theme', [[162, 204, 114], [70, 130, 27]]],
    ['contact-theme', [[253, 87, 96], [253, 87, 96]]],
    ['cart-theme', [[207, 218, 255], [183, 219, 250]]],
    ['favorites-theme', [[207, 218, 255], [183, 219, 250]]],
  ]);
  return new Promise((res, rej) => {
    const randomNetworkError = (Math.random() > 0.9999);
    setTimeout(() => {
      if (!randomNetworkError) {
        res(themes.get(`${id}`));
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        rej('Surprise :) It was randomNetworkError');
      }
    }, delay);
  });
};

const getThemeByPath = (path:string|null, delay = 0) => {
  const pathThemesMap = new Map([
    ['shop', '1'],
    ['profile', 'profile-theme'],
    ['contacts', 'contact-theme'],
    ['settings', 'settings-theme'],
    ['cart', 'cart-theme'],
  ]);

  return new Promise((res, rej) => {
    const randomNetworkError = (Math.random() > 0.9999);
    setTimeout(() => {
      if (!randomNetworkError) {
        res(pathThemesMap.get(`${path}`));
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        rej('Surprise :) It was randomNetworkError');
      }
    }, delay);
  });
};

export { getThemeByID, getThemeByPath };
