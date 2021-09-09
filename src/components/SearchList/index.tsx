import styles from './styles/index.scss'

const SearchList = ({searchResult, isActive }:{searchResult:string[], isActive:boolean}) => {
    return(
        <div className={`${styles['list-container']} ${ isActive ? styles['active'] : '' } `} >
            <ul className={styles['list-container__list']}>
                { searchResult.map((item, num)=><li key={num} className={styles['list-container__list_item']}><a className={styles['list-container__list_item_link']} href="#">{item}</a></li>) }
            </ul>
        </div>
    )
}

export default SearchList;
