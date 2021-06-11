const defaultCapabilitySettings = {
  'sauce:options': {
    extendedDebugging: true,
    name: 'console.log demo',
    build: 'console.log demo',
    // capturePerformance: true,
  },
};

const capabilities = [{
  ...defaultCapabilitySettings,
  browserName: 'Chrome',
  platformName: 'Windows 10',
  browserVersion: 'latest',
}];

exports.config = {
  // Production - us
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'us',

  // // Production - eu
  // user: process.env.EU_SAUCE_USERNAME,
  // key: process.env.EU_SAUCE_ACCESS_KEY,
  // region: 'eu',

  // // Staging
  // user: process.env.s_SAUCE_USERNAME,
  // key: process.env.s_SAUCE_ACCESS_KEY,
  // hostname: 'ondemand.staging.saucelabs.net',

  runner: 'local',
  specs: ['./tests/specs/web-ui/**/*.spec.js'],
  maxInstances: 5,
  logLevel: 'silent',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 0,
  reporters: ['spec'],
  framework: 'jasmine',
  jasmineOpts: {
    helpers: [require.resolve('@babel/register')],
    defaultTimeoutInterval: 120000,
  },
  before(caps, specs, browser) {
    browser.maximizeWindow();
  },
  capabilities,
  services: ['sauce'],
};
