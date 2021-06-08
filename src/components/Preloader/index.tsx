import styles from "./styles/index.scss";
import spinner from './assets/preloader-for-page.gif'

const Preloader = () => (
    <div id="preloader" className={styles.preloader}>
        <img src={spinner} />
    </div>
);

export default Preloader;
