import useMultiLanguage from "@/hooks/useMultiLanguage";
import styles from './styles/index.scss'
import {
    Link
} from 'react-router-dom';

const Index = ({keyword, id, whereFound, productName }:{keyword:string, id:number, whereFound:string, productName:string }) => {
    const __translate = useMultiLanguage();
    return (
        <li className={styles.item}>
            <Link
                to={{
                    pathname: "/search",
                    search: `?id=${id}`,
                }} className={styles.link}>
                <span className={styles.keyword}>{keyword}</span>{__translate(`in`)}
                <span className={styles.whereFound}>{__translate(whereFound)}</span>{__translate(`of`)}
                <span className={styles.productName}>{`"${productName}"`}</span>
            </Link>
        </li>
    );
}

export default Index;
