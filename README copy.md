# Getting Started

## 1. Скопировать ./cypress.env.json.sample в ./cypress.env.json
> cp ./cypress.env.json.sample ./cypress.env.json

## 2. Отредактировать файл ./cypress.env.json:

  "URL":      "<tenant_instance_url>",        // https://asdasd.dev.u-meteor.ru/
  "EMAIL":    "<local_login_email_value>",    // mymail@mail.com
  "PASSWORD": "<local_login_password_value>", // 123!SecretPassword
  "USERNAME": "<user_name>"                   // Иван Иванов

## 3. Установить зависимости:
> yarn

## 4. Запустить тесты
> yarn cy