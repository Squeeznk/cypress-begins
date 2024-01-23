
Cypress.Commands.add('login', () => {
  cy.visit(Cypress.env('URL'));

  cy.get('input[name=email]').clear().type(Cypress.env('EMAIL'));
  cy.get('input[type=password]').clear().type(Cypress.env('PASSWORD'), { log: false });
  cy.get('button').click();

  cy.get('a[href="/profile"]')
    .within(() => {
      return cy.contains(Cypress.env('USERNAME'))
    });
  cy.wait(3000);
})

describe('App E2E', () => {
 
  // it('Попытка входа с неверным паролем - получение сообщения об ошибке', () => {
  //   cy.visit(Cypress.env('URL'));

  //   cy.get('input[name=email]').clear().type(Cypress.env('EMAIL'));
  //   cy.get('input[type=password]').clear().type('123', { log: false });
  //   cy.get('button').click();
  //   cy.get('li[data-type=error]');
  //   cy.screenshot('0001-login-error', {capture: 'runner'});
  // });

  // it('Попытка входа с верным паролем - вход и проверка пользователя', () => {
  //   cy.login()
  //   cy.screenshot('0001-login-success', {capture: 'runner'});
  // });

  it('Открываем доску', () => {

    cy.login()
    cy.get('a[data-test=ProjectLink][href="/projects/asd/work_packages?board_id=35"]').click();

  });

  const uniqueSeed = Date.now().toString();
  const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);
  var task_name = 'CypressTask-' + getUniqueId()

  it('Создать задачу на доске', () => {

    // ищем по вхождению строки в имя класса
    // строка в DOM, которую пытаемся найти: <p class="ui__HeaderTitle-sc-13up52x-3 VghyJ">В спецификации</p>

    cy.get('*[class^="ui__HeaderTitle-sc"]').contains('В спецификации').next()
    .within(() => {
      return cy.get('*[class^="common__PositionRelativeContainer-sc"]')
    }).click().type(task_name);

    cy.get('button[class^="ant-btn"]>span').contains('Сохранить').click()

  });

  it('Открыть карточку задачи', () => {

    cy.get('a div[class^="ui__BoardTaskSubject"]').contains(task_name).parent().parent().parent().parent().first().click()
    cy.screenshot('0001-login-success', {capture: 'runner'});

  });


});