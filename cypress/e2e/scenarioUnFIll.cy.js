import 'cypress-xpath';

describe('Form Input from CSV', () => {
    beforeEach(() => {
        cy.visit('https://forms.office.com/r/u5LQxYEFKn');
    });

    it('Input data from CSV', () => {
        cy.fixture('formData.csv').then((formData) => {
            const lines = formData.split('\n');
            
           
            lines.shift();

            const fillForm = (line) => {
                const [namaLengkap, nomorTelepon, pendapat, rating, tanggalUlasan] = line.split(',').map(item => item.trim());
                console.log(namaLengkap, nomorTelepon, pendapat, rating, tanggalUlasan)

                cy.xpath(`//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]`).clear()
                cy.xpath(`//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]`).clear()
                cy.xpath(`//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]`).clear()

                if (namaLengkap) {
                    cy.xpath(`//span[contains(text(), "Full name")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]`)
                        .type(namaLengkap)
                        .should('have.value', namaLengkap);
                }

                if (nomorTelepon) {
                    cy.xpath(`//span[contains(text(), "Phone Number")]/ancestor::div[@data-automation-id="questionItem"]//input[@data-automation-id="textInput"]`)
                        .type(nomorTelepon)
                        .should('have.value', nomorTelepon);
                }


                if (pendapat) {
                    cy.xpath(`//span[contains(text(), "Do you think your product or service is affordable or expensive?")]/ancestor::div[@data-automation-id="questionItem"]//input[@value="${pendapat}"]`)
                        .check()
                        .should('be.checked');
                }


                if (rating) {
                    cy.xpath(`//span[contains(text(), "Rate our services")]/ancestor::div[@data-automation-id="questionItem"]//span[@role="radio" and @aria-posinset="${rating}"]`)
                        .click();
                }


                if (tanggalUlasan) {
                    cy.xpath(`//span[contains(text(), "Review date")]/ancestor::div[@data-automation-id="questionItem"]//input[@type="text"]`)
                        .click()
                        .type(tanggalUlasan)
                        .should('have.value', tanggalUlasan);
                }

                cy.xpath('//button[@data-automation-id="submitButton"]')
                    .click()
                    .then(() => {
                        cy.wait(4000);
                    });

                if (!namaLengkap){
                    cy.xpath('//div[@id="ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73"]')
                    .should('exist');
                    
                }else{
                    cy.xpath('//div[@id="ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73"]')
                    .should('not.exist');
                }

                if (!nomorTelepon){
                    cy.xpath('//div[@id="ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110"]')
                    .should('exist');
                    
                }else{
                    cy.xpath('//div[@id="ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110"]')
                    .should('not.exist');
                }

                if (!pendapat){
                    cy.xpath('//div[@id="ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7"]')
                    .should('exist');
                    
                }else{
                    cy.xpath('//div[@id="ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7"]')
                    .should('not.exist');
                }

                if (!rating){
                    cy.xpath('//div[@id="ErrorMsgId_r9f97f2550332479a8fdd2914bd99bc1d"]')
                    .should('exist');
                    
                }else{
                    cy.xpath('//div[@id="ErrorMsgId_r9f97f2550332479a8fdd2914bd99bc1d"]')
                    .should('not.exist');
                }

                if (!tanggalUlasan){
                    cy.xpath('//div[@id="ErrorMsgId_r1abee94394494318b1e34a419838e56c"]')
                    .should('exist');
                    
                }else{
                    cy.xpath('//div[@id="ErrorMsgId_r1abee94394494318b1e34a419838e56c"]')
                    .should('not.exist');
                }

                    cy.wait(2000);
                    cy.visit('https://forms.office.com/r/u5LQxYEFKn');

                
            };

            lines.forEach((line, index) => {
                cy.wrap(null).then(() => {
                    if (index < lines.length) {
                        fillForm(line);
                    }
                });
            });
        });
    });
});
