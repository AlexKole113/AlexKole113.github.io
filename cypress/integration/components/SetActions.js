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
        if(startFrom !== 'shop') this.useMainMenuAndGoTo('explore', 'shop');
        if(startFrom !== 'settings')  this.useMainMenuAndGoTo('settings')
        if(startFrom !== 'contacts')   this.useMainMenuAndGoTo('contact', 'contacts');
        // favs and cart
        this.action.click('header a[href="/favorites"]')
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
}

export default SetActions;
