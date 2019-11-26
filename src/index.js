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
        const config = Object.assign(require('./config'), opts);

        const assert = require('assert');
        assert(typeof config.before === 'function', 'config.before must be function!');
        assert(typeof config.handler === 'function', 'config.handler must be function!');
        assert(typeof config.after === 'function', 'config.after must be function!');
        assert(typeof config.dest === 'string' && config.dest, 'config.dest must be string!');
        assert(typeof config.origin === 'object' && config.origin, 'config.origin must be object!');

        // 清理 dest 目录
        if (config.clear === true) {
            const del = require('delete');
            const path = require('path');
            const dist = path.resolve(root, config.dest);
            const fs = require('fs');
            if (fs.existsSync(dist) && fs.statSync(dist).isDirectory()) {
                const deleteds = del.sync(`${dist}/**/*`, { force: true });
                deleteds.forEach(item => {
                    logger.info(`Clear "${item}"`);
                });
                logger.success(`Clear all ${deleteds.length} files!`);
            }
        }

        config.before(api);

        config.handler(api);

        config.after(api);

        logger.logo('Merge Finish!');
    });
};

module.exports.configuration = {
    description: '公共资源文件 public 合并操作',
};
