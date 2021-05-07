//@ts-nocheck
import cssShopAnimation from './styles/index.scss';
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import GroupedCards from "@/components/GroupedCards";

//temporary
import themes from '@/styles/_themes.scss';
window.onload = () => {
    document?.querySelector('html')?.classList.add(themes['flowers-theme'])
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

const Shop = () => {

    return (
    <div className={cssShopAnimation['shop-group']}>

        <CategoryList/>

        <section className={cssShopAnimation['shop-group-transition']}>
            <section
                className={`${cssShopAnimation['shop-group-transition-group']}  ${cssShopAnimation['shop-group-hidden']}`}>

                <Search/>
                <GroupedCards/>

            </section>
            <section
                className={`${cssShopAnimation['shop-group-transition-group']} ${cssShopAnimation['shop-group-current']}`}>

                <Search/>
                <GroupedCards/>

            </section>
        </section>
    </div>
    );

}

export default Shop;
