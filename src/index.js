'use strict';

module.exports = function MergePublicCommand(api, opts = {}) {

    const chalk = require('chalk');

    // commands
    require('./commands/version')(api);

    // merge
    api.registerCommand('merge', {
        description: 'merge public files for production',
        usage: 'micro-app merge',
        details: `
    Examples:
    ${chalk.gray('# merge')}
    micro-app merge
        `.trim(),
    }, args => {
        const logger = api.logger;
        const root = api.root;
        const selfConfig = api.config;
        const config = Object.assign(require('./config'), opts);

        const micros = api.micros;
        const microsConfig = api.microsConfig;

        const assert = require('assert');
        assert(typeof config.handler === 'function', 'config.handler must be function!');
        assert(typeof config.dest === 'string' && config.dest, 'config.dist must be string!');
        assert(typeof config.origin === 'object' && config.origin, 'config.origin must be object!');

        // 清理 dest 目录
        if (config.clear === true) {
            const del = require('delete');
            const path = require('path');
            const dist = path.resolve(selfConfig.root, config.dest);
            const fs = require('fs');
            if (fs.existsSync(dist) && fs.statSync(dist).isDirectory()) {
                const deleteds = del.sync(`${dist}/**/*`, { force: true });
                deleteds.forEach(item => {
                    logger.info(`Clear "${item}"`);
                });
                logger.success(`Clear all ${deleteds.length} files!`);
            }
        }

        micros.forEach(key => {
            const mc = microsConfig[key];
            config.handler(key, mc, selfConfig, api);
        });

        logger.logo('Merge Finish!');
    });
};
