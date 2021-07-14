// @ts-nocheck

import GroupedCards from '@/components/GroupedCards';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import favoritesCss from './styles/index.scss';

const Favorites = () => {
  const products = [
    {
      id: 131, sku: 131, title: 'Trees 1', image: 'https://assets.codepen.io/2736535/trees-1.jpeg', data: [{ length: '50cm' }], price: 301.99, currency: '$', stock: 20,
    },
    {
      id: 132, sku: 132, title: 'Trees 2 Fav', image: 'https://assets.codepen.io/2736535/trees-2.jpeg', data: [{ length: '50cm' }], price: 302.99, currency: '$', stock: 20,
    },
    {
      id: 133, sku: 133, title: 'Trees 3', image: 'https://assets.codepen.io/2736535/trees-3.jpeg', data: [{ length: '50cm' }], price: 303.99, currency: '$', stock: 20,
    },
  ];

  useThemeSwitcher('favorites-theme');
  return (
    <div className={favoritesCss['shop-group']}>
      <GroupedCards products={products} />
    </div>
  );
};

export default Favorites;
