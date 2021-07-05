import css from './styles/index.scss';
import Button from "@/components/Button";
import {IProfilePageState} from "@/pages/Profile/interface";
import {IFakeProfileCategories} from "../../../mocks/fakeData/profile";
import {IFakeShopCategories} from "../../../mocks/fakeData/shop";

const CategoryList = ({categories,updateActiveItem, pageState }:{ categories:IFakeProfileCategories|IFakeShopCategories, updateActiveItem: (id:number) => void, pageState?:IProfilePageState } ) => (

    <section className={css['category-list']}>
        <div className={css['category-list__items']}>
            {categories.map(( {id,value,icon,styling, active} ) => <Button
               key={id}
               updateActiveItem={()=>{updateActiveItem(id)} }
               value={value} icon={icon}
               styling={styling}
               statement={ ( pageState?.loading && active ) ? 'loading' : active }
            />)}
        </div>
    </section>

);

export default CategoryList;
