import footerCopyrightCss from './styles/index.scss'
import commonCss from '@/styles/_common.scss'


const FooterCopyright = () => (

    <section className={footerCopyrightCss['footer__copy']}>
        <div className={commonCss['container']}>
            <div className={footerCopyrightCss['footer__copy_content']} >
                <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
        </div>
    </section>

)

export default FooterCopyright;
