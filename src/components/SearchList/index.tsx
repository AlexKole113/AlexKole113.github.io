import styles from './styles/index.scss'

const SearchList = ({isActive, children }:{isActive:boolean,   children?: JSX.Element | JSX.Element[]; }) => {
    return(
        <div className={`${styles['list-container']} ${ isActive ? styles['active'] : '' } `} >
            <ul className={styles['list-container__list']}>
                { children }
            </ul>
        </div>
    )
}

export default SearchList;
