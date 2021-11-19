import getPath from '@/utils/getPath';
import useMultiLanguage from "@/hooks/useMultiLanguage";

const usePageTitle = () => {
  const __translate = useMultiLanguage();
  const titlesMap = new Map([
    ['cart', __translate('Cart')],
    ['favorites', __translate('Favorites')],
    ['shop', __translate('Shop')],
    ['contacts', __translate('Contacts')],
    ['profile', __translate('Profile')],
    ['settings', __translate('Settings')],
    ['search', __translate('Search')],
    ['check-out', __translate('Check out')],
    ['404', __translate('Page not found')]
  ]);

  if(!getPath()) return titlesMap.get('shop');
  const title = titlesMap.get(getPath());
  if (title && typeof title === 'string') return title;
  return titlesMap.get('404');
};

export default usePageTitle;
