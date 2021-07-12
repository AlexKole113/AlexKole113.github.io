const { round } = Math;

const checkAndUpdateColorHelper = (gradient:number[], result:number[], step:number) => {
  for (let i = 0; i < gradient.length; i++) {
    if (round(result[i]) === gradient[i]) continue;
    if (round(result[i]) < gradient[i]) {
      result[i] = ((result[i] + step) < gradient[i]) ? result[i] += step : gradient[i];
    }
    if (round(result[i]) > gradient[i]) {
      result[i] = ((result[i] - step) > gradient[i]) ? result[i] -= step : gradient[i];
    }
  }
  return result;
};
const changeCssTheme = (lastTheme:number[][], newTheme:number[][], rootElement:HTMLElement|null, delay:number, step:number = 2.3) => {
  if (lastTheme.length !== newTheme.length) throw new Error('lastTheme.length !== newTheme.length');
  if (!rootElement) throw new Error('no root element for themes');

  const resultGradient:number[][] = lastTheme;

  const smoothThemeUpdate = () => {
    let complete = true;
    const [gradient1, gradient2] = newTheme;

    resultGradient[0] = checkAndUpdateColorHelper(gradient1, resultGradient[0], step);
    resultGradient[1] = checkAndUpdateColorHelper(gradient2, resultGradient[1], step);

    for (let i = 0; i < resultGradient.length; i++) {
      for (let j = 0; j < resultGradient[i].length; j++) if (round(resultGradient[i][j]) !== round(newTheme[i][j])) complete = false;
    }

    const colorPrimary = `rgb(${[...resultGradient[0].map((item) => round(item))]})`;
    const colorSecondary = `rgb(${[...resultGradient[1].map((item) => round(item))]})`;

    if (!complete) window.requestAnimationFrame(smoothThemeUpdate);
    rootElement.setAttribute('style', ` --background-theme: linear-gradient(180deg, ${colorPrimary} 20%, ${colorSecondary} 80%);
        --mobile-wrapper-menu-theme:linear-gradient(135deg, ${colorPrimary}, ${colorSecondary});
        --color-theme: ${colorPrimary};
        `);
  };

  setTimeout(smoothThemeUpdate, delay);
};

export default changeCssTheme;
