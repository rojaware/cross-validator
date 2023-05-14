# Angular Exam

<div style="text-align:center"><img src=".github/angular-forms-validation.gif" /></div>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.
Bed & Breakfast page asks user to enter name, room selection and price and post by submit button. Name is required field but room and price are conditionally required. User can submit only with name. But empty name is not allowed with 'Name is required ' error message. When user enters price, then user should select room option. Also blank price input with selected room option is not allowed. Another condition is room price must be higher than $50. Cheaper price will be blocked with error message 'Price must be higher than $50'

When a successful submitted, page will show the result

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
