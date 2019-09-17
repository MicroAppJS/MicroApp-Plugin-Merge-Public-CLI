'use strict';

/* global expect */

const MicroApp = require('@micro-app/core');
const Service = MicroApp.Service;
const path = require('path');

describe('Plugin MergePublicCommand', () => {

    it('MergePublicCommand', () => {
        const service = new Service();
        service.registerPlugin({
            id: 'test:MergePublicCommand',
            link: path.join(__dirname, './index.js'),
        });

        // service.run('help', { _: [] });
        service.run('merge', { _: [] });
    });

});
