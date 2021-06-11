const capabilities = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: [
      '--no-sandbox',
      '--disable-infobars',
    ],
  },
}];

const drivers = {
  chrome: { version: 'latest' },
};

exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  runner: 'local',
  specs: ['./tests/specs/web-ui/**/*.spec.js'],
  maxInstances: 5,
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  reporters: ['spec'],
  framework: 'jasmine',
  jasmineOpts: {
    helpers: [require.resolve('@babel/register')],
    defaultTimeoutInterval: 120000,
  },
  before(caps, specs, browser) {
    browser.maximizeWindow();
  },
  services: [
    ['selenium-standalone', {
      installArgs: { drivers },
      args: { drivers },
    }],
  ],
  capabilities,
  logLevel: 'trace',
  connectionRetryCount: 1,
};
