import { useContext, useEffect, useState } from 'react';
import changeCssTheme from '@/utils/changeCssTheme';
import { LayoutContext } from '@/components/App';
import { getThemeByID } from '../../../mocks/fakeData/themes';

const useThemeSwitcher = (id:string, delay = 700) => {
  const {
    themeID, setThemeID, toggleMenu, menuOpened,
  } = useContext(LayoutContext);
  const [themeRGB, setThemeRGB] = useState<null|number[][]>(null);

  useEffect(() => {
    if (menuOpened) toggleMenu();
    if (themeID === null) {
      getThemeByID(id)
        .then((themeColorsArray) => {
          if (themeColorsArray && Array.isArray(themeColorsArray)) {
            const oldThemeRGB = themeColorsArray;
            setThemeID(`${id}`);
            setThemeRGB(() => themeColorsArray);
            changeCssTheme(oldThemeRGB, themeColorsArray, document.querySelector('main'), delay);
          }
        })
        .catch((e) => {
          throw new Error(`theme error: ${e}`);
        });
    }

    if (themeRGB === null) {
      getThemeByID(themeID ?? id)
        .then((oldThemeRGB) => {
          getThemeByID(id)
            .then((themeColorsArray) => {
              if ((themeColorsArray && Array.isArray(themeColorsArray))
                  && (oldThemeRGB && Array.isArray(oldThemeRGB))) {
                setThemeID(`${id}`);
                setThemeRGB(() => themeColorsArray);
                changeCssTheme(oldThemeRGB, themeColorsArray, document.querySelector('main'), delay);
              }
            });
        })
        .catch((e) => {
          throw new Error(`theme error: ${e}`);
        });

      return;
    }

    getThemeByID(id)
      .then((themeColorsArray) => {
        if (themeColorsArray && Array.isArray(themeColorsArray)) {
          setThemeID(`${id}`);
          setThemeRGB(() => themeColorsArray);
          changeCssTheme(themeRGB, themeColorsArray, document.querySelector('main'), delay);
        }
      })
      .catch((e) => {
        throw new Error(`theme error: ${e}`);
      });
  }, [id]);
};

export default useThemeSwitcher;
