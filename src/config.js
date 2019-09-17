'use strict';

const assert = require('assert');
const path = require('path');
const fs = require('fs');
const copydir = require('copy-dir');

const PUBLIC = './public';

module.exports = {
    clear: false, // 是否先清理 dest 目录?
    dest: PUBLIC, // 目的地
    origin: {}, // 原地址map
    handler(key, mc, config, api) {
        assert(api);

        const logger = api.logger;
        assert(logger);

        const origin = this.origin[key] || path.resolve(mc.root, this.dest);
        const dist = path.resolve(config.root, this.dest);

        if (!fs.existsSync(dist) || !fs.statSync(dist).isDirectory()) {
            fs.mkdirSync(dist);
        }

        if (fs.existsSync(origin) && fs.statSync(origin).isDirectory()) {
            copydir.sync(origin, dist, {
                utimes: true, // keep add time and modify time
                mode: true, // keep file mode
                cover: true, // cover file when exists, default is true
            });
            logger.success(`Copy "${key}" Successful!`);
        } else {
            logger.warn(`Not Found Directory: "${origin}"!`);
        }
    },
};
