import InputControl from "@/components/InputControl";
import SettingsControl from "@/components/SettingsControl";

import checkOutCss from './styles/index.scss'
import commonCss from '@/styles/_common.scss'
import btnCss from '@/components/Button/styles/index.scss'


//temporary
import themes from '@/styles/_themes.scss';
import Switcher from "@/components/Switcher";
window.onload = () => {
    document?.querySelector('html')?.classList.add(themes['cart-theme'])
}

const CheckOut = () => (
    <>
        <section className={checkOutCss['check-out-group']}>
            <div className={commonCss['container']}>
                <div className={checkOutCss['check-out-group__group']}>
                    <section className={checkOutCss['check-out-group__title-block']}>
                        <h3 className={checkOutCss['check-out-group__title-block_title']}>
                            Order Details
                        </h3>
                    </section>
                    <section className={checkOutCss['check-out-group__profile-collection']}>


                        <InputControl state={'received'} />

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                        <InputControl state={'received'} />

                        <InputControl state={'received'} />

                        <InputControl state={'received'} />

                    </section>
                </div>
            </div>
        </section>

        <section className={checkOutCss['check-out-group']}>
            <div className={commonCss['container']}>
                <div className={checkOutCss['check-out-group__group']}>
                    <section className={checkOutCss['check-out-group__title-block']}>
                        <h3 className={checkOutCss['check-out-group__title-block_title']}>
                            Order Details
                        </h3>
                    </section>
                    <section className={checkOutCss['check-out-group__profile-collection']}>

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                    </section>
                </div>
            </div>
        </section>


        <section className={checkOutCss['check-out-group']}>
            <div className={commonCss['container']}>
                <div className={checkOutCss['check-out-group__group']}>
                    <a href="check-out.html" className={`${btnCss['app-btn']} ${btnCss['check-out-btn']}`}>
                        Pay and Check Out
                    </a>
                </div>
            </div>
        </section>

    </>
)

export default CheckOut;
