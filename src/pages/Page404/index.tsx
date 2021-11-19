import useMultiLanguage from "@/hooks/useMultiLanguage";
import style from './styles/index.scss'
const Page404 = () => {
    const __translate = useMultiLanguage();


    return (<div className={style['page404__container']}>
        <div>
            <h1 className={style['page404__title']}>404</h1>
            <p className={style['page404__text']}>{__translate('Page not found')}</p>
        </div>

    </div>);
}
export default Page404;
