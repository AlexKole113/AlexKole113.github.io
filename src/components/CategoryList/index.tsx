import css from './styles/index.scss';
import Button from "@/components/Button";


const CategoryList = () => (
    <section className={css['category-list']}>
        <div className={css['category-list__items']}>

            <Button value={'Flowers'} icon={'plant'} styling={'shadow-pink'} statement={'active'} />
            <Button value={'Plants'} icon={'plant'} styling={'shadow-green'} />
            <Button value={'Trees'} icon={'plant'} styling={'shadow-blue'} statement={'loading'} />
            <Button value={'Popular'} icon={'plant'} styling={'shadow-violet'} />

        </div>
    </section>
);

export default CategoryList;
