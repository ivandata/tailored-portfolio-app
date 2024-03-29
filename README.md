# Portfolio calculator
![Coverage badge](./coverage/badge-branches.svg)
![Coverage badge](./coverage/badge-functions.svg)
![Coverage badge](./coverage/badge-lines.svg)
![Coverage badge](./coverage/badge-statements.svg)

Portfolio calculator based on risk and monthly income. 

### [Demo page](https://vitamin-portfolio.netlify.app/)

## Used tools:
![prettier version](https://img.shields.io/badge/prettier-2.3.2-brightgreen)
![nanoid version](https://img.shields.io/badge/nanoid-3.1.25-brightgreen)
![styled-components version](https://img.shields.io/badge/styled--components-5.3.0-brightgreen) 
![eslint version](https://img.shields.io/badge/eslint-7.30.0-brightgreen) 
![commitlint version](https://img.shields.io/badge/commitlint-12.1.4-brightgreen) 
![craco-alias version](https://img.shields.io/badge/craco--alias-3.0.1-brightgreen) 
![husky version](https://img.shields.io/badge/husky-7.0.0-brightgreen)
![husky version](https://img.shields.io/badge/husky-7.0.0-brightgreen)
![@faker-js/faker version](https://img.shields.io/badge/@faker--js/faker-7.5.0-brightgreen)

- [nanoid](https://github.com/ai/nanoid) A tiny, secure, URL-friendly, unique string ID generator for JavaScript.;
- [styled-components](https://github.com/styled-components/styled-components);
- [volta](https://volta.sh/) JavaScript tool manager;
- [Eslint](https://github.com/eslint/eslint), [commitlint](https://github.com/conventional-changelog/commitlint), [prettier](https://github.com/prettier/prettier) and [husky](https://github.com/typicode/husky)

## Prerequisites
You should have the following dependencies installed already:

- [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [node](https://nodejs.org/en/download/)
- [volta](https://github.com/volta-cli/volta) (or at least [nvm](https://github.com/nvm-sh/nvm))

## Run app locally
If you using nvm instead volta run:
```sh
$ nvm use
```
To lunch the app locally:
```sh
$ yarn
$ yarn start
```
The browser should open automatically. 
I it not happens, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To test the app run:
```sh
$ yarn run test
```

For test badges generating:
```sh
$ yarn run test:badges
```

For dependencies badges updating:
```sh
$ yarn run dep:badges
```
