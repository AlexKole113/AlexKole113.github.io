import ActionTo from "./ActionTo";

class SetActions {

    constructor(props) {
        this.setupData = props;
        this.action = new ActionTo(props)
    }

    checkTheme = (theme) => {
        this.action.checkAttr('#app > main', 'style', 'have.attr', theme)
    }

    useMainMenuAndGoTo = (textInLink, url) => {
        this.action.click('[data-test="main-menu-toggler"]');
        this.action.clickOnElementWhereText('header a', textInLink);
        this.action.checkURL( this.setupData.host +  ( url ?? textInLink ))
    }

    mainMenuSurf = ({startFrom,endTo}) => {
        if(startFrom !== 'profile') this.useMainMenuAndGoTo('profile');
        if(startFrom !== 'shop') this.useMainMenuAndGoTo('shop', 'shop');
        if(startFrom !== 'settings')  this.useMainMenuAndGoTo('settings')
        if(startFrom !== 'contacts')   this.useMainMenuAndGoTo('contact', 'contacts');

        this.useMainMenuAndGoTo(endTo)
    }

    footerMenuSurf = ({startFrom, endTo}) => {
        if(startFrom === 'shop') this.scrollAndLoadAllProducts();
        this.action.clickOnElementWhereText('#footer a', 'profile');
        this.action.clickOnElementWhereText('#footer a', 'settings');
        this.action.clickOnElementWhereText('#footer a', 'contact');
        this.action.clickOnElementWhereText('#footer a', 'shop');
        this.scrollAndLoadAllProducts();
        this.action.clickOnElementWhereText('#footer a', endTo)
    }

    additionalLinksSurf = (startFrom) => {
        if(startFrom === 'shop') this.scrollAndLoadAllProducts();
        this.action.scrollToElm('#footer');
        this.action.clickOnElementWhereText('#footer a', 'upwork')
        this.action.checkURL('https://www.upwork.com/freelancers/alexkole113')
    }

    scrollAndLoadAllProducts = () => {
        cy.get('#content-group').scrollTo(0,2000,{duration: this.setupData.stepWaiting() })
        cy.wait(this.setupData.stepWaiting())
        cy.get('#content-group').scrollTo(0,4000,{duration: this.setupData.stepWaiting() })
        cy.wait(this.setupData.stepWaiting())
        cy.get('#content-group').scrollTo(0,6000,{duration: this.setupData.stepWaiting() })
        cy.wait(this.setupData.stepWaiting())
        cy.get('#content-group').scrollTo(0,8000,{duration: this.setupData.stepWaiting() })
        cy.wait(this.setupData.stepWaiting())
        cy.get('#content-group').scrollTo(0,10000,{duration: this.setupData.stepWaiting() })
        cy.wait(this.setupData.stepWaiting())
        cy.get('#content-group').scrollTo(0,20000,{duration: this.setupData.stepWaiting() })
    }

    openShopTab = (tabText) => {
        this.action.clickOnElementWhereText('a[data-test="button"]', tabText);
    }

    openProfileTabPayments = () => {
        this.action.clickOnElementWhereText('form a[href="#"]', 'payments');
        this.action.checkProp('[data-fields-group="profile"] input[name="name"]', 'not.be.visible');
        this.action.checkProp('[data-fields-group="address"] input[name="streetHouse"]', 'not.be.visible');
        this.action.checkProp('[data-fields-group="payments"] #card-number','be.visible');
    }

    openProfileTabAddress = () => {
        this.action.clickOnElementWhereText('form a[href="#"]', 'address');
        this.action.checkProp('[data-fields-group="payments"] #card-number','not.be.visible');
        this.action.checkProp('[data-fields-group="profile"] input[name="name"]', 'not.be.visible');
        this.action.checkProp('[data-fields-group="address"] input[name="streetHouse"]', 'be.visible');
    }

    openProfileTabProfile = () => {
        this.action.clickOnElementWhereText('form a[href="#"]', 'profile');
        this.action.checkProp('[data-fields-group="address"] input[name="streetHouse"]','not.be.visible');
        this.action.checkProp('[data-fields-group="payments"] #card-number','not.be.visible');
        this.action.checkProp('[data-fields-group="profile"] input[name="name"]', 'be.visible');
    }

    fillProfileProfileForm = () => {
        this.action.useInputCorrect('[data-fields-group="profile"] input[name="name"]', 'Mr. Test Field', 'Eddddiiiiited teeext')
        this.action.useInputInCorrect('[data-fields-group="profile"] input[name="phone"]', '123')
        this.action.useInputCorrect('[data-fields-group="profile"] input[name="phone"]', '1234567890', '123')
        this.action.useInputInCorrect('[data-fields-group="profile"] input[name="email"]', 'qwerty')
        this.action.useInputCorrect('[data-fields-group="profile"] input[name="email"]', 'qwerty@qwerty.com', 'q')
    }

    fillProfileAddressForm = () => {
        this.action.useInputCorrect('[data-fields-group="address"] input[name="streetHouse"]', 'Poland, 13', '12222')
        this.action.useInputCorrect('[data-fields-group="address"] input[name="countyCity"]', 'Gdansk,', '--')
    }

    fillProfilePaymentForm = () => {
        this.action.type('#card-number', 1112)
        cy.get('#card-number').blur();
        this.action.checkContent('[data-fields-group="payments"] p', 'Card number is invalid')
        this.action.type('#cvc', 111)
        cy.get('#card-expiry').type(1111).should('have.value', '11 / 11');
        cy.get('#card-expiry').blur();
        this.action.checkContent('[data-fields-group="payments"] p', 'Expiry year cannot be in the past')
        this.action.clearInput('#card-expiry')
        cy.get('#card-expiry').type(1124).should('have.value', '11 / 24');
    }

    checkAllProfileInputs = () => {
        this.openProfileTabProfile();
        this.action.checkProp('[data-fields-group="profile"] input[name="email"]', 'have.value', 'qwerty@qwerty.com' )
        this.action.checkProp('[data-fields-group="profile"] input[name="name"]', 'have.value', 'Mr. Test Field' )
        this.action.checkProp('[data-fields-group="profile"] input[name="phone"]', 'have.value', '1234567890' )

        this.openProfileTabAddress();
        this.action.checkProp('[data-fields-group="address"] input[name="streetHouse"]', 'have.value', 'Poland, 13' )
        this.action.checkProp('[data-fields-group="address"] input[name="countyCity"]', 'have.value', 'Gdansk,' )

        this.openProfileTabPayments();
        this.action.checkProp('#card-expiry', 'have.value', '11 / 24' )

    }

    useSearchProducts = ( keyword ) => {
        cy.wait(1200)
        this.action.typeAndEdit(cy.get('[data-search="product"]:first-child input[type="text"]').first(), 'plant', 'tree' )
        cy.wait(1200)
        this.action.clickOnElementWhereText(cy.get('[href="/search?id=131"] span').first(), 'Tree 1')
        cy.wait(1200)
        cy.get('[data-test*="products"]').should('be.visible')
        cy.get('[data-test*="products"]').should('have.length', 1)
        cy.go('back')
        cy.wait(1200)

        this.action.typeAndEdit(cy.get('[data-search="product"]:first-child input[type="text"]').first(), 'grass', 'fl' )
        cy.get('[data-search="product"]:first-child [type="submit"]').first().click();

        cy.wait(1200)
        cy.get('[data-test="product-card"]').first().find('div:nth-child(3)').find('span:nth-child(1)').should('be.visible').contains('Flowers 1')


        cy.get('[data-search="product"]:first-child input[type="text"]').clear();
        this.action.typeAndEdit(cy.get('[data-search="product"]:first-child input[type="text"]'), 'plant', 'asasasasasasas' )
        cy.get('[data-search="product"]:first-child [type="submit"]').click();

        cy.wait(1200)
        cy.get('[data-test="message-not-found"]').scrollIntoView().should('be.visible').contains('No results')
    }

    useFavorites = () => {
        cy.wait(1200)
        const randomProds = [];
        while(randomProds.length < 3 ){
            const getRandom = Math.round(  Math.random() * (4 - 1) + 1 );
            if( randomProds.indexOf(getRandom) === -1 ){
                randomProds.push(getRandom)
            }
        }

        cy.get(`[data-test="product-card"]:nth-child(${randomProds[0]}) a:first-child`).first().click();
        this.action.checkContent('#header a[href="/favorites"]', ' 1 ')
        this.openShopTab('Plants')
        cy.wait(1200)
        cy.get(`[data-test="product-card"]:nth-child(${randomProds[1]}) a:first-child`).eq(1).click();
        this.action.checkContent('#header a[href="/favorites"]', ' 2 ')
        this.openShopTab('Flowers')
        cy.wait(1200)
        cy.get(`[data-test="product-card"]:nth-child(${randomProds[2]}) a:first-child`).eq(0).click();
        this.action.checkContent('#header a[href="/favorites"]', ' 3 ')
        this.openShopTab('Trees')
        cy.wait(1200)
        this.scrollAndLoadAllProducts();
        this.action.click(`[data-test="product-card"]:nth-child(${Math.round(  Math.random() * (8 - 4) + 4 )}) a:first-child`);
        this.action.checkContent('#header a[href="/favorites"]', ' 4 ')

        this.action.click('#header a[href="/favorites"]')
        this.action.checkURL(this.setupData.host + 'favorites')
        cy.get('[data-test="product-card"]').should('have.length', 4)

        this.action.click('[data-test="product-card"]:nth-child(1) a:first-child');
        this.action.checkContent('#header a[href="/favorites"]', ' 3 ')

        this.useMainMenuAndGoTo('profile');

        this.action.click('#header a[href="/favorites"]')
        cy.get('[data-test="product-card"]').should('have.length', 3)
    }

    useCart = () => {
        const randomCardsLength = Math.round(  Math.random() * (8 - 3) + 3 );
        const checkTotalPrice = () => {
            let totalPrice = 0;
            cy.get('[data-test="cart-item-price"]').each((item, index, list) => {
                totalPrice += parseFloat(item[0].innerText)
                if(index ===  list.length - 1) {
                    this.action.checkContent('[data-test="total-in-cart"]', totalPrice.toFixed(2))
                }
            })
        }
        const changeAndCheckItemAmmount = ({item, ammountTo}) => {
         cy.get(`[data-test="cart-item"]:nth-child(${item})`).find('[data-test="cart-item-price"]')
                .invoke('text').then((itemPrice)=>{
                cy.get(`[data-test="cart-item"]:nth-child(${item})`).find('[data-test="cart-item-amount"]').should('have.value', 1);
                for(let i = 0; i < ammountTo-1; i++ ) {
                    cy.get(`[data-test="cart-item"]:nth-child(${item})`).find('[data-test="plus-item"]').click()
                }
                cy.get(`[data-test="cart-item"]:nth-child(${item})`).find('[data-test="cart-item-amount"]').should('have.value',  ammountTo)
                cy.get(`[data-test="cart-item"]:nth-child(${item})`).find('[data-test="cart-item-price"]').should('have.text', ( ammountTo * itemPrice).toFixed(2))
                checkTotalPrice()
                for(let i = 0; i < ammountTo-1; i++ ) {
                     cy.get(`[data-test="cart-item"]:nth-child(${item})`).find('[data-test="minus-item"]').click()
                 }
                 cy.get(`[data-test="cart-item"]:nth-child(${item})`).find('[data-test="cart-item-amount"]').should('have.value', 1);
         });
        }
        const randomCards = () => {
            let generateNewNumber = true;
            const cards = [];
            while( generateNewNumber ) {
                const card =  Math.ceil( Math.random() * 10);
                if( !cards.includes(card) ) cards.push(card)
                if (cards.length === randomCardsLength) generateNewNumber = false;
            }
            return cards;
        };

        cy.wait(1200)
        this.scrollAndLoadAllProducts();
        const cardNumbers = randomCards();
        cardNumbers.forEach((cardNum)=>{
            cy.get(`[data-test="product-card"]:nth-child(${cardNum}) a:nth-child(2)`).first().click();
            cy.wait(1000)
        });
        this.action.checkContent('#header a[href="/cart"]', ` ${randomCardsLength} `);
        this.action.click('#header a[href="/cart"]')
        cy.get('[data-test="cart-item"]').should('have.length', randomCardsLength)
        checkTotalPrice();
        changeAndCheckItemAmmount({item: 1, ammountTo: 8})
        changeAndCheckItemAmmount({item: 2, ammountTo: 6})
        changeAndCheckItemAmmount({item: 3, ammountTo: 3})
        cy.get('[data-test="cart-item"]:nth-child(1) a[data-test="remove-product"]').click();
        cy.get('[data-test="cart-item"]:nth-child(1) a[data-test="minus-item"]').click();
        cy.get('[data-test="cart-item"]').should('have.length', randomCardsLength - 2)

        this.useMainMenuAndGoTo('shop');
        this.openShopTab('Trees')
        cy.wait(1200)
        cy.get(`[data-test="product-card"]:nth-child(3) a:nth-child(2)`).eq(2).click();
        this.action.checkContent('#header a[href="/cart"]', ` ${randomCardsLength - 2 + 1} `);
        this.action.click('#header a[href="/cart"]')
        cy.get('[data-test="cart-item"]').should('have.length', randomCardsLength - 2 + 1)

        this.useMainMenuAndGoTo('shop');
        this.openShopTab('Plant')
        cy.wait(1200)
        cy.get(`[data-test="product-card"]:nth-child(3) a:nth-child(2)`).eq(1).click();
        this.action.checkContent('#header a[href="/cart"]', ` ${randomCardsLength} `);
        this.action.click('#header a[href="/cart"]')
        cy.get('[data-test="cart-item"]').should('have.length', randomCardsLength)
    }


    useSettings = () => {

        const checkLangPL = () => {
            cy.get('[data-test="setting-section"] select').select('🇵🇱')
            .should(()=>{
                expect( JSON.parse( localStorage.getItem('settings') ).language ).to.eq( 'pl')
            });
            cy.wait(600);
            cy.get('[data-test="setting-section-title"]').should('have.text', 'Ustawienia aplikacji' );
            this.useMainMenuAndGoTo('sklep', 'shop');
            cy.wait(600);
            this.openShopTab('Drzewa');
            cy.wait(600);
            this.useMainMenuAndGoTo('profil', 'profile');
            cy.wait(600);
            this.action.clickOnElementWhereText('#footer a', 'ustawienia');
            cy.wait(600);
            cy.get('[data-test="setting-section"] select').select('🇬🇧').should(()=>{
                expect( JSON.parse( localStorage.getItem('settings') ).language ).to.eq( 'en')
            });
        }

        const checkLangRU = () => {
            cy.get('[data-test="setting-section"] select').select('🇷🇺')
            .should(()=>{
                expect( JSON.parse( localStorage.getItem('settings') ).language ).to.eq( 'ru')
            });

            cy.wait(600);
            cy.get('[data-test="setting-section-title"]').should('have.text', 'Настройки приложения' );
            this.useMainMenuAndGoTo('витрина', 'shop');
            cy.wait(600);
            this.openShopTab('Деревья');
            cy.wait(600);
            this.useMainMenuAndGoTo('профиль', 'profile');
            cy.wait(600);
            this.action.clickOnElementWhereText('#footer a', 'настройки');
            cy.get('[data-test="setting-section"] select').select('🇬🇧')
            .should(()=>{
                expect( JSON.parse( localStorage.getItem('settings') ).language ).to.eq( 'en')
            });
        }


        this.useMainMenuAndGoTo('settings');
        cy.wait(1200);
        cy.get('[data-test="setting-section-title"]').should('have.text', 'App settings' );
        cy.get('[data-test="switcher"]').first().click().should(()=>{
            expect( JSON.parse( localStorage.getItem('settings') ).pushNotification ).to.eq(false)
        });
        cy.wait(600);
        cy.get('[data-test="switcher"]').first().click().should(()=>{
            expect( JSON.parse( localStorage.getItem('settings') ).pushNotification ).to.eq(true)
        });
        cy.wait(600);
        cy.get('[data-test="switcher"]').first().click().should(()=>{
            expect( JSON.parse( localStorage.getItem('settings') ).pushNotification ).to.eq(false)
        });

        checkLangPL();
        checkLangRU();
    }
}

export default SetActions;
