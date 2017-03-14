
exports.config = {
 directConnect: false,
    capabilities:{
        'browserName': 'chrome'},
    framework: 'jasmine2',
    specs: ['smokeTest.js'],
    jasmineNodeOpts:{
        defaultTimeoutInterval: 30000
    }
};
