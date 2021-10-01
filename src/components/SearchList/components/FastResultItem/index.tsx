import styles from './styles/index.scss'

const Index = ({keyword, whereFound, productName }:{keyword:string, whereFound:string, productName:string }) => {
    return (
        <li className={styles.item}>
            <a className={styles.link} href="#">
                <span className={styles.keyword}>{keyword}</span>{`in`}
                <span className={styles.whereFound}>{whereFound}</span>{`of`}
                <span className={styles.productName}>{`"${productName}"`}</span>
            </a>
        </li>
    );
}

export default Index;
