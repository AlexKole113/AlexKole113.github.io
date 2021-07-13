import getPath from '@/utils/getPath';

const usePageTitle = (defaultTitle:string) => {
  const titlesMap = new Map([
    ['cart', 'Cart'],
    ['favorites', 'Favorites'],
    ['shop', 'Shop'],
    ['contacts', 'Contacts'],
    ['profile', 'Profile'],
    ['settings', 'Settings'],
  ]);
  const title = titlesMap.get(getPath());
  if (title && typeof title === 'string') return title;

  return defaultTitle;
};

export default usePageTitle;
