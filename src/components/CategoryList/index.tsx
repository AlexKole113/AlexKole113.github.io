import css from './styles/index.scss';
import Button from "@/components/Button";
import {IProfilePageState} from "@/pages/Profile/interface";

interface ICategories {
    id:number,
    value: string,
    icon: string,
    styling?:string,
    active?: string
}


const CategoryList = ({categories,updateActiveItem, pageState }:{categories:ICategories[], updateActiveItem: (id:number) => void, pageState:IProfilePageState } ) => (



    <section className={css['category-list']}>
        <div className={css['category-list__items']}>

            {categories.map(( {id,value,icon,styling, active} ) => <Button
               key={id}
               updateActiveItem={()=>{updateActiveItem(id)} }
               value={value} icon={icon}
               styling={styling}
               statement={ ( pageState?.loading && active ) ? 'loading' : active }
            />)}

            {/*<Button value={'Flowers'} icon={'plant'} styling={'shadow-pink'} statement={'active'} />*/}
            {/*<Button value={'Trees'} icon={'plant'} styling={'shadow-blue'} statement={'loading'} />*/}

        </div>
    </section>

);

export default CategoryList;
