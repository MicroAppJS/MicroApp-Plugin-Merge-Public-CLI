'use strict';

module.exports = {
    name: '@micro-app/demo',
    description: '',
    version: '0.0.1',
    type: '', // types 类型
    webpack: { // webpack 配置 (只有自己使用)
        // output: {
        //     path: path.resolve(__dirname, 'public'),
        //     publicPath: '/public/',
        // },
    },

    // staticPath: '',

    // dlls: [
    //     {
    //         context: __dirname,
    //     },
    // ],

    alias: { // 前端
        api: 'abc',
        config: {
            link: 'abc',
            description: '配置',
        },
        service: {
            link: 'abc',
            description: '接口',
            type: 'server',
        },
    },

    // 服务配置
    server: {
        entry: '', // 服务端入口
        port: 8088, // 服务端口号
        options: {
            // 服务端回调参数
        },
    },

    plugins: [
        [{
            id: 'test',
            description: '这是test',
            link: __dirname + '/test/testPlugin',
        }, {
            a: 1,
        }],
    ],

    // deploy: {
    //     git: 'git+ssh://git@xxxxx.git',
    //     branch: 'test',
    //     // branch: {
    //     //     name: 'develop',
    //     //     extends: true,
    //     // },
    //     message: '', // 提交 message 中增加内容
    // },
};
