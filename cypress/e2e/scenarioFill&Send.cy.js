import 'cypress-xpath';

it('FillAbleSend_TC01', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="5"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC02', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="4"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC03', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="3"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC04', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="2"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC05', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="1"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});


//------------------------------------------------------------------------------------------------------------------------------

it('FillAbleSend_TC06', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="5"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC07', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="4"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC08', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="3"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC09', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="2"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC10', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="1"]')
    .check()
    .should('be.checked');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="1"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

//------------------------------------------------------------------------------------------------------------------------------

it('FillAbleSend_TC11', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="3"]/following::input[@data-automation-id="textInput"]')
    .type("Worth it")
    .should('have.value', 'Worth it');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="5"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC12', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="3"]/following::input[@data-automation-id="textInput"]')
    .type("Worth it")
    .should('have.value', 'Worth it');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="4"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC13', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="3"]/following::input[@data-automation-id="textInput"]')
    .type("Worth it")
    .should('have.value', 'Worth it');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="3"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC14', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="3"]/following::input[@data-automation-id="textInput"]')
    .type("Worth it")
    .should('have.value', 'Worth it');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="2"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});

it('FillAbleSend_TC15', () => {
    cy.visit('https://forms.office.com/r/u5LQxYEFKn')

    //Nama
    cy.xpath('//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('Mohammad Andrie Prasetiyo')
    .should('have.value', 'Mohammad Andrie Prasetiyo');

    //Nomor
    cy.xpath('//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]')
    .type('081232976945')
    .should('have.value', '081232976945');

    //Radio Button
    cy.xpath('//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="radio" and @aria-posinset="3"]/following::input[@data-automation-id="textInput"]')
    .type("Worth it")
    .should('have.value', 'Worth it');

    //Rate
    cy.xpath('//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="1"]')
    .click();

    //Tanggal
    cy.xpath('//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]')
    .click()
    .type('06/03/2024')
    .should('have.value', '06/03/2024');

    cy.xpath('//button[@data-automation-id="submitButton"]')
    .click()

});
