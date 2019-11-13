# Micro APP Plugin - Merge-Public CLI

[Plugin] merge public files cli plugin.

基于webpack多入口的多仓库业务模块开发的插件应用框架核心库.

[![Coverage Status][Coverage-img]][Coverage-url]
[![CircleCI][CircleCI-img]][CircleCI-url]
[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[Coverage-img]: https://coveralls.io/repos/github/MicroAppJS/MicroApp-Plugin-Merge-Public-CLI/badge.svg?branch=master
[Coverage-url]: https://coveralls.io/github/MicroAppJS/MicroApp-Plugin-Merge-Public-CLI?branch=master
[CircleCI-img]: https://circleci.com/gh/MicroAppJS/MicroApp-Plugin-Merge-Public-CLI/tree/master.svg?style=svg
[CircleCI-url]: https://circleci.com/gh/MicroAppJS/MicroApp-Plugin-Merge-Public-CLI/tree/master
[npm-img]: https://img.shields.io/npm/v/@micro-app/plugin-merge-public-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-app/plugin-merge-public-cli
[download-img]: https://img.shields.io/npm/dm/@micro-app/plugin-merge-public-cli.svg?style=flat-square
[download-url]: https://npmjs.org/package/@micro-app/plugin-merge-public-cli

## Install

```sh
yarn add @micro-app/plugin-merge-public-cli
```

or

```sh
npm install -S @micro-app/plugin-merge-public-cli
```

## Usage

### 在项目 `根目录` 的 `micro-app.config.js` 文件中配置

```js
module.exports = {
    // ...

    plugins: [ // 自定义插件
        ['@micro-app/plugin-merge-public-cli', {
            clear: false, // 是否先清理 dest 目录?
            dest: PUBLIC, // 目的地
            origin: {
                [key]: value,
            }, // 原地址map
            handler(key, mc, config, api) {
                // do something
            },
        }],
    ],
};
```
