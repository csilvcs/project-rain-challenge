/*Given, Then, When*/

import ContactPage from '../pageobjects/ContactPage'
const contactPage = new ContactPage


Given(/^I access site Rain$/, () => {
	contactPage.accessContact()
});

When(/^I click on Contact$/, () => {
	contactPage.clickOnContact()
});

When(/^fill in my name "([^"]*)"$/, (name) => {
	contactPage.fillFieldName(name)
});

When(/^fill my last "([^"]*)"$/, (lastName) => {
	contactPage.fillFieldLastName(lastName)
});

When(/^fill my email "([^"]*)"$/, (email) => {
	contactPage.fillFieldEmail(email)
});

When(/^fill my phone "([^"]*)"$/, (phone) => {
	contactPage.fillFieldPhone(phone)
});

When(/^fill my company "([^"]*)"$/, (company) => {
	contactPage.fillFieldCompany(company)
});

When(/^fill my job "([^"]*)"$/, (job) => {
	contactPage.fillFieldJob(job)
});

Then(/^I see messagem with success$/, () => {
	contactPage.buttonSubmit()
});

Then(/^I see messagem for complete$/, () => {
	contactPage.buttonSubmit()
	contactPage.validateMessage()
});
