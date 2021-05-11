import commonStyles from '@/styles/index.scss';
import menuStyles from  "./styles/index.scss";

const Menu = ({toggleMenuCallback}:{toggleMenuCallback: () => void }) => {

    return (<>
        <section className={menuStyles['menu']}>
            <div className={commonStyles['container']}>
                <div className={menuStyles['menu-top']}>
                    <div onClick={toggleMenuCallback} className={menuStyles['menu-top__hum']}>
                        <div className={menuStyles['hamburger']}>
                            <svg className={`${menuStyles.ham} ${menuStyles.hamRotate} ${menuStyles['ham-item']}`}
                                 viewBox="0 0 100 100" width="80">
                                <path
                                    className={`${menuStyles['line']} ${menuStyles['top']}`}
                                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"/>
                                <path
                                    className={`${menuStyles['line']} ${menuStyles['middle']}`}
                                    d="m 30,50 h 40"/>
                                <path
                                    className={`${menuStyles['line']} ${menuStyles['bottom']}`}
                                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"/>
                            </svg>
                        </div>
                    </div>
                    <div className={menuStyles['menu-top__page-title']}>
                        <h1 className={menuStyles['page-title']}>explore</h1>
                    </div>
                </div>
                <div className={menuStyles['menu-main-group']}>
                    <nav className={menuStyles['main-menu']}>
                        <ul className={menuStyles['main-menu__items']}>
                            <li className={menuStyles['main-menu__items_item']}>
                                <a className={menuStyles['main-menu__link']} href="profile.html">
                                    <span className={menuStyles['main-menu__link-icon']}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                                             className="svg-inline--fa fa-user fa-w-14" role="img"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                                            fill="currentColor"
                                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                                    </span>
                                    <span className={menuStyles['main-menu__link-text']}>
                                        profile
                                    </span>
                                    <span className={menuStyles['main-menu__link-extra']}>
                                       <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="arrow-right"
                                            className="svg-inline--fa fa-arrow-right fa-w-14" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                                           fill="currentColor"
                                           d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                    </span>
                                </a>
                            </li>
                            <li className={` ${menuStyles['main-menu__items_item']} ${menuStyles['active-menu-item']}`}>
                                <a className={menuStyles['main-menu__link']} href="index.html">
                                            <span className={menuStyles['main-menu__link-icon']}>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                     data-icon="list"
                                                     className="svg-inline--fa fa-list fa-w-16" role="img"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                                                    fill="currentColor"
                                                    d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>                                </span>
                                    <span className={menuStyles['main-menu__link-text']}>
                                                explore
                                            </span>
                                    <span className={menuStyles['main-menu__link-extra']}>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                     data-icon="arrow-right"
                                                     className="svg-inline--fa fa-arrow-right fa-w-14" role="img"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                                                    fill="currentColor"
                                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                            </span>
                                </a>
                            </li>
                            <li className={menuStyles['main-menu__items_item']}>
                                <a className={menuStyles['main-menu__link']} href="settings.html">
                                    <span className={menuStyles['main-menu__link-icon']}>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                     data-icon="cog"
                                                     className="svg-inline--fa fa-cog fa-w-16" role="img"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                                                    fill="currentColor"
                                                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>                                </span>
                                    <span className={menuStyles['main-menu__link-text']}>
                                                settings
                                            </span>
                                    <span className={menuStyles['main-menu__link-extra']}>
                                       <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="arrow-right"
                                            className="svg-inline--fa fa-arrow-right fa-w-14" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                                           fill="currentColor"
                                           d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                    </span>
                                </a>
                            </li>
                            <li className={menuStyles['main-menu__items_item']}>
                                <a className={menuStyles['main-menu__link']} href="contact.html">
                                            <span className={menuStyles['main-menu__link-icon']}>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                     data-icon="phone-alt"
                                                     className="svg-inline--fa fa-phone-alt fa-w-16"
                                                     role="img" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 512 512"><path
                                                    fill="currentColor"
                                                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>                                </span>
                                    <span className={menuStyles['main-menu__link-text']}>
                                                contact
                                            </span>
                                    <span className={menuStyles['main-menu__link-extra']}>
                                       <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="arrow-right"
                                            className="svg-inline--fa fa-arrow-right fa-w-14" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                                           fill="currentColor"
                                           d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <nav className={menuStyles['additional-menu']}>
            <ul className={menuStyles['additional-menu__items']}>
                <li className={menuStyles['additional-menu__items_item']}>
                    <a className={`${menuStyles['additional-menu__link']} ${menuStyles['link-cart']}`} href="cart.html">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                             className="svg-inline--fa fa-shopping-cart fa-w-18" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor"
                                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                        </svg>
                        <span className={menuStyles['link-cart__in-cart-now']}> 1 </span>
                    </a>
                </li>
                <li className={menuStyles['additional-menu__items_item']}>
                    <a className={`${menuStyles['additional-menu__link']} ${menuStyles['link-favorites']}`}
                       href="favorites.html">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart"
                             className="svg-inline--fa fa-heart fa-w-16" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </>)
};

export default Menu;
