'use strict';

const del = require('delete');
const path = require('path');
const dist = path.resolve(process.cwd(), './test/clear');
const fs = require('fs');
if (fs.existsSync(dist) && fs.statSync(dist).isDirectory()) {
    const deleteds = del.sync(`${dist}/**/*`, { force: true });
    deleteds.forEach(item => {
        console.info(`Clear "${item}"`);
    });
    console.info(`Clear all ${deleteds.length} files!`);
}
