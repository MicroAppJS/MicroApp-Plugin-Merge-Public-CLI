'use strict';


module.exports = function(api, opts) {
    console.log(opts);
    const cwd = api.getCwd();
    console.log(cwd);
};
