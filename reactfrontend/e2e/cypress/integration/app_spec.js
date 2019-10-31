describe("Django DRF React", () => {
  const lead = {
    name: "Jenny",
    email: "jenny@mail.com",
    message: "I am looking for a new film role"
  };

  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });

  it("should be able to fill in a form", () => {
    cy.visit("/");

    cy.get('input[name="name"]')
      .type(lead.name)
      .should("have.value", lead.name);

    cy.get('input[name="email"]')
      .type(lead.email)
      .should("have.value", lead.email);

    cy.get('textarea[name="message"]')
      .type(lead.message)
      .should("have.value", lead.message);

    cy.get("form").submit();
  });

  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(`${lead.name}${lead.email}${lead.message}`);
  });
});
