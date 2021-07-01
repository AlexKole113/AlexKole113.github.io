
import styles from './styles/index.scss'

const Header = ({children}:any) => (

    <header id={'header'} className={styles.header}>
        {children}
    </header>

);

export default Header;
