import contactItemCss from './styles/index.scss'

const ContactItem = () => (
    <div className={contactItemCss['contact-item']} >
        <span className={contactItemCss['contact-item__label']}>
            Email:
        </span>
        <a href="mailto:alexander.koledov@gmail.com" className={contactItemCss['contact-item__value']}>
            email@email.com
        </a>
    </div>
)

export default ContactItem;
