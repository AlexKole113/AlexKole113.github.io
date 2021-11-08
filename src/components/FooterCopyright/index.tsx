import commonCss from '@/styles/_common.scss';
import footerCopyrightCss from './styles/index.scss';
import useMultiLanguage from "@/hooks/useMultiLanguage";

const FooterCopyright = () => {
    const __translate = useMultiLanguage();
    return (
        <section className={footerCopyrightCss.footer__copy}>
            <div className={commonCss.container}>
                <div className={footerCopyrightCss.footer__copy_content}>
                    <span>
                        {__translate('Contact me on')}
                        {' '}
                        <a href="https://www.upwork.com/freelancers/alexkole113">Upwork</a>
                      .
                    </span>
                </div>
            </div>
        </section>
    );
}

export default FooterCopyright;
