//@ts-nocheck
import profileCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'
import CategoryList from "@/components/CategoryList";



//temporary
import themes from '@/styles/_themes.scss';
import {Input} from "postcss";
import InputControl from "@/components/InputControl";
window.onload = () => {
    document?.querySelector('html')?.classList.add(themes['profile-theme'])
    document?.querySelector('.menu-top__hum')?.addEventListener('click', ()=>{
        document.querySelector('html').classList.toggle('menu-opened');
        document.querySelector('.menu').classList.toggle('menu-opened');
        document.querySelector('.mobile-wrapper').classList.toggle('menu-opened');
    })

    // category transition
    document?.querySelector('.app-btn.shadow-green')?.addEventListener('click', ()=> {
        document.querySelector('html').classList.toggle('flowers-theme');
        document.querySelector('html').classList.toggle('plants-theme');

        document.querySelectorAll('.shop-group-transition-group').forEach((item)=>{
            if( item.classList.contains('shop-group-hidden') ) {
                item.classList.toggle('shop-group-hidden')
                item.classList.toggle('shop-group-transition-start')
            }
            if( item.classList.contains('shop-group-current') ) {
                item.classList.toggle('shop-group-current')
                item.classList.toggle('shop-group-transition-end')
            }
        })

    })

    //preloader
    window.addEventListener('load',() => {
        document.querySelector('#preloader').remove();
        document.body.classList.remove('state-loading');
        document.querySelector('.mobile-wrapper').classList.remove('state-loading');
    })
}

const Profile = () => {

    return (
        <div className={profileCss['profile-group']}>

            <CategoryList/>

            <section className={profileCss['profile-group-transition']}>
                <section
                    className={`${profileCss['profile-group']} ${profileCss['profile-group-hidden']}`}>

                    <div className={commonCss['container']}>
                        <div className={profileCss['profile-group__group']}>

                            <section className={profileCss['profile-group__title-block']}>
                                <h3 className={profileCss['profile-group__title-block_title']}>
                                    Address
                                </h3>
                            </section>

                            <section className={profileCss['profile-group__profile-collection']}>

                                <InputControl state={'received'} />
                                <InputControl state={'received'} />
                                <InputControl state={'invalid'} />

                            </section>
                        </div>
                    </div>

                </section>
                <section
                    className={`${profileCss['profile-group-transition-group']} ${profileCss['profile-group']} ${profileCss['profile-group-current']}`}>

                    <div className={commonCss['container']}>
                        <div className={profileCss['profile-group__group']}>

                            <section className={profileCss['profile-group__title-block']}>
                                <h3 className={profileCss['profile-group__title-block_title']}>
                                    Address
                                </h3>
                            </section>

                            <section className={profileCss['profile-group__profile-collection']}>

                                <InputControl state={'loading'} />
                                <InputControl state={'success'} />
                                <InputControl state={'received'} />

                            </section>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    );

}

export default Profile;
