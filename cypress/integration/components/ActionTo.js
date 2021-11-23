class ActionTo {

  constructor({stepWaiting, screenSizes}) {
    this.stepWaiting = stepWaiting;
    this.screenSizes = screenSizes;
  }

  init = ({host, setScreenSize}) => {
    this.setScreenSize(setScreenSize);
    this.goToSite(host)
    cy.wait(this.stepWaiting());
  }


  // CLICK
  click = (CSSSelector) => {
    if (typeof CSSSelector === 'string') {
      cy.get(CSSSelector)
        .click();
      cy.wait(this.stepWaiting());
    } else {
      CSSSelector.click();
      cy.wait(this.stepWaiting());
    }
  };

  clickOnElementWhereText = (CSSSelector, text) => {
    if (typeof CSSSelector === 'string') {
      cy.get(CSSSelector)
        .contains(text, { matchCase: false })
        .click();
      cy.wait(this.stepWaiting());
    } else {
      CSSSelector.contains(text, { matchCase: false })
        .click();
      cy.wait(this.stepWaiting());
    }
  };

  clickOnElementWhereAttr = (attrSelector) => {
    cy.get(attrSelector)
      .click();
    cy.wait(this.stepWaiting());
  };

  clickAndCheckProp = (cssSelectorClickTarget, cssSelectorCheckTarget, checkProp) => {
    this.click(cssSelectorClickTarget);
    this.checkProp(cssSelectorCheckTarget, checkProp);
  };

  // CHECK
  checkProp = (cssSelectorCheckTarget, shouldMission, shouldValue) => {
    cy.get(cssSelectorCheckTarget);
    if (shouldMission && shouldValue) {
      cy.should(shouldMission, shouldValue);
    } else {
      cy.should(shouldMission);
    }
  };

  checkAttr = (cssSelectorCheckTarget, attr, shouldMission, shouldValue) => {
    cy.get(cssSelectorCheckTarget)
      .should(shouldMission, attr, shouldValue);
  };

  checkContent = (cssSelectorCheckTarget, content) => {
    if (typeof cssSelectorCheckTarget === 'string') {
      cy.get(cssSelectorCheckTarget)
        .should('have.text', content);
    } else {
      cssSelectorCheckTarget.should('have.text', content);
    }
  };

  checkCSS = (selector, cssProp, cssVal) => {
    cy.get(selector).should('have.css', cssProp, cssVal)
  }

  checkURL = (url) => {
    cy.url().should('eq', url);
  }

  // Inputs
  clearInput = (cssInputSelector) => {
    cy.get(cssInputSelector).clear()
  }

  type = (cssInputSelector, typeText) => {
    cy.get(cssInputSelector)
      .type(typeText)
      .should('have.value', typeText);
  };

  typeAndEdit = (cssInputSelector, typeTextWrong, typeTextRight) => {
    if (typeof cssInputSelector === 'string') {
      cy.get(cssInputSelector)
          .type(typeTextWrong)
          .should('have.value', typeTextWrong)
          .clear()
          .wait(600)
          .type(typeTextRight)
          .get(cssInputSelector)
          .should('have.value', typeTextRight);
    } else {
      cssInputSelector
          .type(typeTextWrong)
          .should('have.value', typeTextWrong)
          .clear()
          .wait(600)
          .type(typeTextRight);
      cssInputSelector.should('have.value', typeTextRight);
    }



  };

  clearFormFields = (formSelector) => {
    cy.get(`${formSelector} input[type="text"]`).clear();
    cy.get(`${formSelector} input[type="number"]`).clear();
    cy.get(`${formSelector} input[type="email"]`).clear();
    cy.get(`${formSelector} textarea`).clear();
  };

  // SCROLL

  scrollToElm = (element) => {
    if (typeof element === 'string') {
      cy.get(element).scrollIntoView({duration:600});
    } else {
      element.scrollIntoView({duration:600});
    }
  };

  // SCREEN
  setScreenSize = (name) => {
    cy.viewport(this.screenSizes[name].width, this.screenSizes[name].height);
  };

  // GO TO URL
  goToSite = (url) => {
    cy.visit({url,failOnStatusCode: false});
  };

  useInputCorrect = (inputCssSelector , inputText, editedText ) => {
    this.type(inputCssSelector, inputText );
    this.click(`${inputCssSelector} ~ [data-test="received"]`);
    this.typeAndEdit(inputCssSelector , editedText, inputText);
    this.click(`${inputCssSelector} ~ [data-test="received"]`);
    this.type(inputCssSelector , inputText);
    this.click(`${inputCssSelector} ~ [data-test="received"]`);
    this.typeAndEdit(inputCssSelector , editedText, inputText);
  };

  useInputInCorrect = (formCssSelector, wrongText) => {
    this.type(formCssSelector, wrongText);
    this.checkProp(`${formCssSelector} ~ [data-test="invalid"]`, 'exist')
    this.checkProp(`${formCssSelector} ~ [data-test="received"]`, 'not.exist')
    this.checkAttr(formCssSelector, 'value', 'not.equal', wrongText );
    this.clearInput(formCssSelector)
  };
}
export default ActionTo;
