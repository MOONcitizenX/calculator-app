# Tестовое задание калькулятор

# Deploy: [Калькулятор](https://mooncitizenx-calculator-app.netlify.app/).

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать приложение калькулятор. Приложение должно предоставлять основные арифметические операции, построитель выражений и полную историю всех выражений.

**Обязательная компонентная модель:**

- **_Header_** - должен отображать заголовок приложения, а также ссылки на другие страницы.
- **_Calculator_** - корневой элемент для менеджмента данных калькулятора (логика для хранения истории, операций, текущего состояния и т.д.).
- **_Display_** - отображает ввод калькулятора, выражения и историю.
- **_History_** - отображает список ранее выполненных операций.
- **_ControlPanel_** - используется для управления взаимодействиями калькулятора, которые не связаны с расчетными операциями. Например, он предоставляет функционал для открытия/скрытия истории.
- **_Keypad_** - используется для ввода операндов, а также выполнения различных операций с этими операндами.

#### Диаграмма компонентов:

> ![diagramma of components](./image.png)

#### Необходимый функционал:

- Сложение
- Вычитание
- Умножение
- Деление
- Переключение знака
- Построитель выражения
- История операций
- Показывать полную историю
- Очистка истории
- Очистка вычисленного значения и выражения
- Очистка всего (истории, вычисленного значения и выражения)
- Точность расчета - 3 символа

#### Дополнительный функционал

- Действительные числа могут быть записаны как 0.5 и .5
- Операция **%** - остаток от деления

#### Пример графического представления:

Дизайн является приблизительным и может быть изменен в зависимости от условий задания.
Ссылка на макет: [Макет "Калькулятор"](https://xd.adobe.com/view/3d64c8c6-a59f-4785-736f-6b50257b8e83-4b55/).

#### Также проект предполагает:

- Организацию файловой структуры react приложения. Ссылка на структуру: [Cтруктура проекта](https://github.com/mkrivel/structure).
- Для реализации логики приложения, необходимо использовать поведенческий паттерн программирования **_"Команда"_**, который позволяет превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций (см. подробнее [паттерн Команда](https://refactoring.guru/ru/design-patterns/command)).
- Реализация с использованием как классовых, так и функциональных react компонентов и использованием хуков. Разделите весь функционал приложения на две страницы, на одной из которых будет представлена реализация через классовые компоненты, а на второй - через функциональные. Например, в компоненте header должны быть представлены ссылки на следующие страницы: home(FC) и home(CC).
- Обработку ошибок через паттерн _"Error Boundaries"_
- Реализация светлой и тёмной темы с использованием _styled-components_
- Проверку типов в React компонентах, передаваемых параметров и подобных объектов.
- Использование алиасов для импортирования файлов.

#### Замечания:

- Использование библиотеки react-redux не является реализацией паттерна "Команда".
- Запрещено использование функции **_eval_** и библиотеки **_mathjs_**(или любые другие аналоги) для реализации логики вычисления.

## Используемые технологии

### Для react

- **_Node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- **_Babel_** - транспайлер, преобразующий код из одного стандарта в другой.
- **_Webpack_** - инструмент, позволяющий скомпилировать, например, JavaScript модули в единый JS-файл.
- **_yarn_** - менеджер пакетов.
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов.
- **_react-router-dom_** - набор навигационных компонентов.
- **_react-redux_** - инструмент управления состоянием.
- **_prop-types_** - набор валидаторов, которые могут быть использованы для проверки получаемых данных.
- **_styled-components_** - система стилизации react компонентов.
- **_cypress_** — e2e тестирование для веб приложений.

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

- Арифметические операции.
- Модуль истории.
- Модуль дисплея.
- Модуль клавиатуры.
- Модуль навигации.
- Модуль смены темы и т.д.

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[React redux](https://react-redux.js.org/introduction/quick-start)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Detox](https://github.com/wix/Detox/blob/master/docs/README.md)

[Styled-components](https://www.styled-components.com/docs)

[Commits convetional](https://www.conventionalcommits.org/en/v1.0.0/#specification)
