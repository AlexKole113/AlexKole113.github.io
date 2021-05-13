import css from './styles/index.scss';
import Button from "@/components/Button";

interface ICategories {
    id:number,
    value: string,
    icon: string,
    styling?:string
}


const CategoryList = ({categories}:{categories:ICategories[]}) => (



    <section className={css['category-list']}>
        <div className={css['category-list__items']}>

            {categories.map(( {value,icon,styling} ) => <Button value={value} icon={icon} styling={styling} />)}
            {/*<Button value={'Flowers'} icon={'plant'} styling={'shadow-pink'} statement={'active'} />*/}
            {/*<Button value={'Trees'} icon={'plant'} styling={'shadow-blue'} statement={'loading'} />*/}

        </div>
    </section>

);

export default CategoryList;
