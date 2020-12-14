let chai = require('chai');
let chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

module.exports = chai;