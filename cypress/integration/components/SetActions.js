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
        this.action.clickOnElementWhereText('#footer a', 'explore');
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

    shopSurfAndCheck = () => {

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
        this.action.clickOnElementWhereText(cy.get('[href="/search?id=131"] span').first(), 'Trees 1')
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
        cy.get(`[data-test="product-card"]:nth-child(${Math.round(  Math.random() * (4 - 1) + 1 )}) a:first-child`).first().click();
        this.action.checkContent('#header a[href="/favorites"]', ' 1 ')
        this.openShopTab('Plants')
        cy.wait(1200)
        cy.get(`[data-test="product-card"]:nth-child(${Math.round(  Math.random() * (4 - 1) + 1 )}) a:first-child`).eq(1).click();
        this.action.checkContent('#header a[href="/favorites"]', ' 2 ')
        this.openShopTab('Flowers')
        cy.wait(1200)
        cy.get(`[data-test="product-card"]:nth-child(${Math.round(  Math.random() * (4 - 1) + 1 )}) a:first-child`).eq(0).click();
        this.action.checkContent('#header a[href="/favorites"]', ' 3 ')
        this.openShopTab('Trees')
        cy.wait(1200)
        this.scrollAndLoadAllProducts();
        this.action.click(`[data-test="product-card"]:nth-child(${Math.round(  Math.random() * (8 - 4) + 4 )}) a:first-child`);
        this.action.checkContent('#header a[href="/favorites"]', ' 4 ')

        this.action.click('#header a[href="/favorites"]')
        this.action.checkURL('http://localhost:5000/favorites')
        cy.get('[data-test="product-card"]').should('have.length', 4)

        this.action.click('[data-test="product-card"]:nth-child(1) a:first-child');
        this.action.checkContent('#header a[href="/favorites"]', ' 3 ')

        this.useMainMenuAndGoTo('profile');

        this.action.click('#header a[href="/favorites"]')
        cy.get('[data-test="product-card"]').should('have.length', 3)
    }

    useCart = () => {
        const randomCardsLength = Math.round(  Math.random() * (8 - 3) + 3 );
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

        // change amount and check price (first get price for item)
        // delete item (via button and via "0")
        // add item from different categories
        // change amount and check price

    }
}

export default SetActions;
