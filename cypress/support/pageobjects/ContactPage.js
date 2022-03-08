/// <reference types="Cypress" />

import ContactElements from '../elements/ContactElements'
const contactElements = new ContactElements
const url = Cypress.config("baseUrl")

class ContactPage {
    // Acessa o site que será testado
    accessContact() {
        cy.visit(url)
    }

    clickOnContact() {
        cy.get(contactElements.clickContact()).click()
        cy.wait(3000)
    }

    fillFieldName(name) {
        cy.wait(3000)
        cy.get(contactElements.inputFirstName()).type(name)
    }

    fillFieldLastName(lastName) {
        cy.wait(3000)
        cy.get(contactElements.inputLastName()).type(lastName)
    }

    fillFieldEmail(email) {
        cy.scrollTo(100, 100)
        cy.wait(3000)
        cy.get(contactElements.inputEmail()).type(email)
    }

    fillFieldPhone(phone) {
        cy.scrollTo(100, 500)
        cy.wait(3000)
        cy.get(contactElements.inputPhone()).type(phone)
    }

    fillFieldCompany(companyName) {
        cy.wait(3000)
        cy.get(contactElements.inputCompany()).type(companyName)
    }

    fillFieldJob(jobtitle) {
        cy.wait(3000)
        cy.get(contactElements.inputJob()).type(jobtitle)
    }

    // Entrar
    buttonSubmit() {
        cy.get(contactElements.buttonSubmit()).click()
        cy.wait(5000)
        // cy.get(contactElements.loopingSubmit()).should('contain', 'submit')
    }

    validateMessage() {
        cy.get(contactElements.ValidateMessagepleaseComplete()).should('contain', 'Please complete this required field')
    }
    
}

export default ContactPage;
