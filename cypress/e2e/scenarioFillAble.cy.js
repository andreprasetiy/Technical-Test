import 'cypress-xpath';

it('FillAble_TC01', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');
});

it('FillAble_TC02', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');
});

it('FillAble_TC03', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');
});

it('FillAble_TC04', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="2"]')
    .check()
    .should('be.checked');
});

it('FillAble_TC05', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="3"]')
    .check()
    .should('be.checked');

    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="3"]/following::input[@data-automation-id="textInput"]')
    .type("Worth it")
    .should('have.value', 'Worth it');
});

it('FillAble_TC06', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="1"]')
    .click();
});

it('FillAble_TC07', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="2"]')
    .click();
});

it('FillAble_TC08', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="3"]')
    .click();
});

it('FillAble_TC09', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="4"]')
    .click();
});

it('FillAble_TC10', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="5"]')
    .click();
});

it('FillAble_TC11', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');
});





