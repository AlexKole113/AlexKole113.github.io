import getPath from '@/utils/getPath';

const usePageTitle = () => {
  const titlesMap = new Map([
    ['cart', 'Cart'],
    ['favorites', 'Favorites'],
    ['shop', 'Shop'],
    ['contacts', 'Contacts'],
    ['profile', 'Profile'],
    ['settings', 'Settings'],
    ['search', 'Search'],
    ['check-out', 'Check out'],
    ['404', 'Page not found']
  ]);

  const title = titlesMap.get(getPath());

  if (title && typeof title === 'string') return title;

  return titlesMap.get('404');
};

export default usePageTitle;
