//@ts-nocheck
import ContactItem from "@/components/ContactItem";
import contactCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'


const Contact = () => {

    return (
       <>
           <div className={contactCss['contact-group-map']} >
               <div className={contactCss['contact-group__group']}>
                   <div className={contactCss['contact-group-map__iframe-wrapper']}>
                       <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0"
                               marginWidth="0"
                               src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gdansk%20Brzezno+(My%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                   </div>
               </div>
           </div>

           <div className={contactCss['contact-group']}>
               <div className={commonCss['container']}>
                   <div className={contactCss['contact-group__group']}>

                       <section className={contactCss['contact-group__title-block']}>
                           <h3 className={contactCss['contact-group__title-block_title']}>
                               Email and Phone
                           </h3>
                       </section>

                       <section className={contactCss['contact-group__contacts-collection']}>

                           <ContactItem />

                           <ContactItem />

                       </section>

                   </div>
               </div>
           </div>
       </>
    );

}

export default Contact;
