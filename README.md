# Тестирование контактной формы с помощью cypress на typescript

### Описание тест-кейсов ниже раздела установки

## Структура проекта
```
cypress
├── e2e
│   └── direct_url_form_test.cy.ts  ── тесты для контактной формы
├── fixtures
│   └── contact_user_data.json  ── данные для заполнения формы
├── screenshots
│   └── direct_url_form_test.cy.ts
└── support
    ├── commands.ts
    └── e2e.ts
cypress.config.ts  ── конфигурация cypress 
package-lock.json
package.json
README.md
tsconfig.json  ── конфигурация typescript
```

## Установка
### актуально для node v18.17.1

1. Склонивароть репозиторий

```bash
git clone https://github.com/LomakinMN/ar_cypress_ts
```
2. Перейти в склонированную папку

```bash
cd ar_cypress_ts
```
3. Установить зависимости

```bash
npm install
```
4. Запустить тесты с помощью панели cypress

```bash
npm run test
```
5. Запустить тесты с выводом только в консоль

```bash
npm run cypress
```

## Тест-кейсы для контактной формы [https://www.testograf.ru/ru/blog/feedback-form-template](https://kontaktnaya-forma.testograf.ru)
| Номер | Название модуля                          | Предусловия                                                                                                     | Название проверки                                         | Шаги                                                                                                                          | Ожидаемый реузультат                                                                                                                                                      |
|-------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Контактная форма                         | Открыта форма и все обязательные поля пустые, поле телефон не является обязательным и оно пустое                | Отправка формы со всеми пустыми полями                    | нажать на кнопку "Отправить"                                                                                                  | Форма не отправляется, все поля кроме поля "телефон" выделяются красным цветом и над ними появляется красное сообщение "Вопрос является обязательным"                     |
| 2     | Контактная форма                         | Открыта форма, заполнено только одно обязательное поле, поле телефон не является обязательным и оно пустое      | Отправка формы с 1 заполненым обязательным полем          | нажать на кнопку "Отправить"                                                                                                  | Форма не отправляется,поля "телефон" и одно обязательное незаполненное выделяются красным цветом и над ними появляется красное сообщение "Вопрос является обязательным"   |
| 3     | Контактная форма                         | Открыта форма, заполнены все обязательные поля, поле телефон не является обязательным и оно пустое              | Отправка формы со 1 незаполненным обязательным полем      | нажать на кнопку "Отправить"                                                                                                  | Форма не отправляется, все поля кроме поля "телефон" и заполненного поля выделяются красным цветом и над ними появляется красное сообщение "Вопрос является обязательным" |
| 4     | Контактная форма                         | Открыта форма, заполнены все обязательные поля кроме одного, поле телефон не является обязательным и оно пустое | Отправка формы со всеми заполненными обязательными полями | нажать на кнопку "Отправить"                                                                                                  | Форма отправляется, на странице исчезает форма и появляется текст об успешной отправке формы "Благодарим за обращение!"                                                   |
| 5     | Контактная форма                         | Открыта форма, заполнены все поля                                                                               | Отправка формы со всеми заполненными полями               | нажать на кнопку "Отправить"                                                                                                  | Форма отправляется, на странице исчезает форма и появляется текст об успешной отправке формы "Благодарим за обращение!"                                                   |
| 6     | Контактная форма, поле "Цель обращения:" | Открыта форма и поле нажато                                                                                     | Поиск и выбор несуществующего значения в листе            | вписать в поле для поиска значения в листе несуществующее значение и нажать enter                                             | Вписанное значение не найдено, после нажатия на enter поле остается пустым                                                                                                |
| 7     | Контактная форма, поле "Цель обращения:" | Открыта форма и поле нажато                                                                                     | Поиск и выбор существующего значения в листе              | вписать в поле для поиска значения в листе существующее значение и нажать enter                                               | Вписанное значение найдено, оно единственное осталось в листе, после нажатия enter поле осталось пустым                                                                   |
| 8     | Контактная форма, поле "Цель обращения:" | Открыта форма и поле нажато                                                                                     | Поиск и выбор существующего значения в листе              | вписать в поле для поиска значения в листе существующее значение и нажать нажать на него                                      | Вписанное значение найдено, оно единственное осталось в листе, после нажатия на него в поле остается это значение                                                         |
| 9     | Контактная форма, поле "Цель обращения:" | Открыта форма и в поле есть значение                                                                            | Очищение поля                                             | нажать на крестик в поле справа от значения                                                                                   | поле очищается                                                                                                                                                            |
| 10    | Контактная форма                         | Открыта форма, поле "Цель обращения:" заполнено корректно, поле телефон пустое или заполнено любыми данными     | Отправка формы с невалидными значениями                   | заполнить корректно остальные поля кроме одного, ввести в это поле любой текст больше 255 символов, нажать кнопку "отправить" | форма отправляется, на странице исчезает форма и появляется текст об успешной отправке формы "Благодарим за обращение!"                                                   |
| 11    | Контактная форма                         | Открыта форма, поле "Цель обращения:" заполнено корректно, поле телефон пустое или заполнено любыми данными     | Отправка формы с невалидными значениями                   | ввести во все оставшиеся поля любой текст больше 255 символов, нажать кнопку "отправить"                                      | форма отправляется, на странице исчезает форма и появляется текст об успешной отправке формы "Благодарим за обращение!"                                                   |

