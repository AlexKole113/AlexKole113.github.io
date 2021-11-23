const setupData = {
  host: 'https://react-demo.alex-kole.com/',
  stepWaiting: () => Math.round((Math.random() * ( 1500 - 800 )) + 800),
  screenSizes: {
    xsm: { width: 320, height: 568 },
    sm: { width: 520, height: 497 },
    md: { width: 768, height: 497 },
    lg: { width: 1024, height: 497 },
    xl: { width: 1440, height: 740 },
  },
};
export default setupData;
