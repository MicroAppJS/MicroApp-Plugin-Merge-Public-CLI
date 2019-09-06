'use strict';

module.exports = function versionCommand(api) {

    const pkg = require('../../package.json');

    api.addCommandVersion(pkg);

};
