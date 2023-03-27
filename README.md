# Users app

Users is a simple `React-TypeScript` web application for displaying filter and sort users.

It have `Storybook` for developing the stateless component (`Views`) isolatedly.

## Demo

<a href="https://sesam-users.netlify.app/" target="_blank">https://sesam-users.netlify.app/</a>


## Architecture
Since the app is relatively small, so the the folder structure is flat. The code split into layers such as components, hooks and utils. Components are split into stateless "dumb" components, that focuses on the design called `Views`, while the business logic and internal states are done in `ViewModel` component (`Containers`). Layout is done in the components that called `Page`.

## Usage

Running the app

```bash
yarn start
```

Running `storybook`

```bash
yarn storybook
```

Running unit-tests

```bash
yarn test --watch
```

Running e2e tests

```bash
yarn cypress:open
```

## Naming conventions

| type                | filename                      | suffix  | examples              |
| ------------------- | ----------------------------- | ------- | --------------------- |
| component           | PascalCase                    | \*.tsx  | MyComponent.[page|viewModel|view].tsx       |
| component folder    | PascalCase                     | -       | MyComponent           |
| vanilla JS          | camelCase                     | \*.ts   | userStoreValidator.ts |
| component test file | PascalCase and dot             | \*.ts   | MyButton.test.js      |
| component's scss    | PascalCase                    | \*.scss | MyControls.module.scss       |
| partial scss        | low dash prefix and camelCase | \*.scss | \_variables.scss      |
| image               | dash-separated                | \*.png  | logo-icon.png         |
| svg                 | dash-separated                | \*.svg  | logo-icon.svg         |


## To complete

Features
- [x]   Filter `User Cards` via search textbox
- [x]   Sort `User Cards` by username, company name or city name
- [x]   Navigate between `Users` into `User Details` page
    -   [x] Back button in `User Details` page
- [x]   Responsiveness
- [ ]   Error handling
- [x]   Accessability
- [ ]   Themes
- [ ]   Translations
### Performance
-   [ ] Throttle search box
### Testing
-   [x] jest
-   [x] cypress.io
-   [x] Storybook
### CI/CD
-   [x] Deployment via netlify

### License

[MIT License](LICENSE)
