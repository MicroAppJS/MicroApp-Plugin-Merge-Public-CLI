'use strict';

/* global expect */

const MicroApp = require('@micro-app/core');
const Service = MicroApp.Service;
const path = require('path');

describe('Plugin VueCLIAdapter', () => {

    it('VueCLIAdapter', () => {
        const service = new Service();
        service.registerPlugin({
            id: 'test:VueCLIAdapter',
            link: path.join(__dirname, './index.js'),
        });

        service.run('help', { _: [] });

        // expect(api.chainWebpack).not.toBeUndefined();
        // expect(api.chainWebpack).not.toBeNull();

        // expect(api.configureWebpack).not.toBeUndefined();
        // expect(api.configureWebpack).not.toBeNull();

        // expect(api.configureDevServer).not.toBeUndefined();
        // expect(api.configureDevServer).not.toBeNull();
    });

});
