# What is

Сборка Cypress-begins - это пример готового окружения для запуска E2E тестов Cypress. 

Возможны 2 варианта запуска:
- На локальной машине
- В Docker контейнере (в браузере electron)

# Getting Started

## 1. Скопировать ./cypress.env.json.sample в ./cypress.env.json
```
cp ./cypress.env.json.sample ./cypress.env.json
```

## 2. Отредактировать файл ./cypress.env.json
```
  "URL":      "<tenant_instance_url>",        // https://...
  "EMAIL":    "<local_login_email_value>",    // mymail@mail.com
  "PASSWORD": "<local_login_password_value>", // 123!SecretPassword
  "USERNAME": "<user_name>"                   // Иван Иванов
```

## 3. Установить зависимости

### 3.1 Локальный запуск
```
yarn
```

### 3.2 Запуск в Docker контейнере
```
yarn install --frozen-lockfile
```

## 4. Запустить тесты
```
yarn cy // в фоновом ржиме
```
или
```
yarn cypress // в среде cypress
```