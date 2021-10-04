import styles from './styles/index.scss'
import {
    Link
} from 'react-router-dom';

const Index = ({keyword, id, whereFound, productName }:{keyword:string, id:number, whereFound:string, productName:string }) => {
    return (
        <li className={styles.item}>
            <Link
                to={{
                    pathname: "/search",
                    search: `?id=${id}`,
                }} className={styles.link}>
                <span className={styles.keyword}>{keyword}</span>{`in`}
                <span className={styles.whereFound}>{whereFound}</span>{`of`}
                <span className={styles.productName}>{`"${productName}"`}</span>
            </Link>
        </li>
    );
}

export default Index;
