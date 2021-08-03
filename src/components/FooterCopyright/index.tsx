import commonCss from '@/styles/_common.scss';
import footerCopyrightCss from './styles/index.scss';

const FooterCopyright = () => (

  <section className={footerCopyrightCss.footer__copy}>
    <div className={commonCss.container}>
      <div className={footerCopyrightCss.footer__copy_content}>
        <span>
          Contact me on
          {' '}
          <a href="https://www.upwork.com/freelancers/alexkole113">upwork</a>
          .
        </span>
      </div>
    </div>
  </section>

);

export default FooterCopyright;
