const ddiff = require('return-deep-diff');
module.exports = 'roleUpdate', (oRole, nRole) => {
    console.log(ddiff(oRole, nRole));
};