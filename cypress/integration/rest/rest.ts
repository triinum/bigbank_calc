import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";
var baseUrl = `https://laenutaotlus.bigbank.ee/?amount=5000&interestRate=13.8&period=60&productName=SMALL_LOAN&loanPurpose=DAILY_SETTLEMENTS&bbmedium=small_loan`;


Given("Make a post request with the resource '{word}'",(Resource)=>{
    cy.request({
        method:"GET",
        url:baseUrl,
        headers: {
            header: "application/json",
        }
    }).then((response) => {
        Cypress.env("StatusCode", response.status);
        let body = JSON.parse(JSON.stringify(response.body));
        Cypress.env("MyResponse", JSON.stringify(body));
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('status');
      //  cy.getCookie('session_id').should('have.property', 'Authenticated', 'false')
            expect(response.status).to.eq(200)
            cy.log("GET /transaction Response body: " + JSON.stringify(response.body));
            cy.log(response.body.size)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(6)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].title).to.eq("Bigbank")
    });
})
When("Print the response in console",()=>{
    cy.log(Cypress.env("MyResponse"));
  });
