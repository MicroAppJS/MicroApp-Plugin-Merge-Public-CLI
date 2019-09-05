# Micro APP Plugin - Vue CLI

[Plugin] adapter vue cli plugin.

基于webpack多入口的多仓库业务模块开发的插件应用框架核心库.

[![Coverage Status][Coverage-img]][Coverage-url]
[![CircleCI][CircleCI-img]][CircleCI-url]
[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[Coverage-img]: https://coveralls.io/repos/github/MicrosApp/MicroApp-Plugin-Vue-CLI/badge.svg?branch=master
[Coverage-url]: https://coveralls.io/github/MicrosApp/MicroApp-Plugin-Vue-CLI?branch=master
[CircleCI-img]: https://circleci.com/gh/MicrosApp/MicroApp-Plugin-Vue-CLI/tree/master.svg?style=svg
[CircleCI-url]: https://circleci.com/gh/MicrosApp/MicroApp-Plugin-Vue-CLI/tree/master
[npm-img]: https://img.shields.io/npm/v/@micro-app/plugin-vue-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-app/plugin-vue-cli
[download-img]: https://img.shields.io/npm/dm/@micro-app/plugin-vue-cli.svg?style=flat-square
[download-url]: https://npmjs.org/package/@micro-app/plugin-vue-cli

## Install

```sh
yarn add @micro-app/plugin-vue-cli
```

or

```sh
npm install -S @micro-app/plugin-vue-cli
```

## Usage

### 在项目 `根目录` 的 `micro-app.config.js` 文件中配置

```js
module.exports = {
    // ...

    plugins: [ // 自定义插件
        ['@micro-app/plugin-vue-cli', {
            // root: 1,
        }],
    ],
};
```
