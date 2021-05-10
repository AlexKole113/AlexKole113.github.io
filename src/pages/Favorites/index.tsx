//@ts-nocheck
import favoritesCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'




//temporary
import themes from '@/styles/_themes.scss';
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import GroupedCards from "@/components/GroupedCards";
window.onload = () => {
    document?.querySelector('html')?.classList.add(themes['favorites-theme'])
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

const Favorites = () => {

    return (
        <div className={favoritesCss['shop-group']}>

            <section className={favoritesCss['shop-group-transition']}>
                <section
                    className={`${favoritesCss['shop-group-transition-group']}  ${favoritesCss['shop-group-hidden']}`}>

                    <Search/>
                    <GroupedCards/>

                </section>
                <section
                    className={`${favoritesCss['shop-group-transition-group']} ${favoritesCss['shop-group-current']}`}>

                    <Search/>
                    <GroupedCards/>

                </section>
            </section>
        </div>
    );

}

export default Favorites;
