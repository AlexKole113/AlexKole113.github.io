import GroupedCards from '@/components/GroupedCards';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import favoritesCss from './styles/index.scss';
import useFavoritesProductList from "@/hooks/useFavoritesProductList";

const Favorites = () => {

  const products =  useFavoritesProductList();

  useThemeSwitcher('favorites-theme');
  return (
    <div className={favoritesCss['shop-group']}>
      <GroupedCards products={products} actualCat={-1} catId={0} />
    </div>
  );
};

export default Favorites;
