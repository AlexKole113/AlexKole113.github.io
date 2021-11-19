import styles from "./styles/index.scss";
import spinner from './assets/preloader-for-page.gif'

const Preloader = ({type}:{type?:string}) => (
    <div data-attachment={'preloader'} className={`${styles.preloader} ${ type ? styles[type] : '' }` }>
        <img src={spinner} />
    </div>
);

export default Preloader;
