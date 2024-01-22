describe('App E2E', () => {
 
  it('Попытка входа с неверным паролем - получение сообщения об ошибке', () => {
    cy.visit(Cypress.env('URL'));

    cy.get('input[name=email]').clear().type(Cypress.env('EMAIL'));
    cy.get('input[type=password]').clear().type('123', { log: false });
    cy.get('button').click();
    cy.get('li[data-type=error]');
    cy.screenshot('0001-login-error', {capture: 'runner'});
  });

  it('Попытка входа с верным паролем - вход и проверка пользователя', () => {
    cy.visit(Cypress.env('URL'));

    cy.get('input[name=email]').clear().type(Cypress.env('EMAIL'));
    cy.get('input[type=password]').clear().type(Cypress.env('PASSWORD'), { log: false });
    cy.get('button').click();

    cy.get('a[href="/profile"]')
      .within(() => {
        return cy.contains(Cypress.env('USERNAME'))
      });
    cy.wait(3000);
    cy.screenshot('0001-login-success', {capture: 'runner'});
  });

});