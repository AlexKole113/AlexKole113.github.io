
import FooterMenu from "@/components/FooterMenu";
import FooterSmm from "@/components/FooterSmm";
import FooterCopyright from "@/components/FooterCopyright";

import footerCss from './styles/index.scss'
import commonCss from '@/styles/_common.scss'

const Footer = () => (
    <footer className={footerCss['footer']}>
        <section className={footerCss['footer__body']} >
            <div className={commonCss['container']}>
                <div className={footerCss['footer__body_content']}>


                    <FooterMenu />

                    <FooterSmm />

                </div>
            </div>
        </section>

        <FooterCopyright />

    </footer>
);

export default Footer;
