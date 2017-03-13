
exports.config = {
 directConnect: true,
    
    capabilities:{
        'browserName': 'chrome'
    },

    framework: 'jasmine2',
    specs: ['todo-spec.js'],

    jasmineNodeOpts:{
        defaultTimeoutInterval: 3000
    }

};
