import { ENV_CONFIG } from '../../constants';
import testStorage from '../data/testStorage';

const CURRENT_TIME = new Date().getTime();
const NAME_PREFIX = 'insights-monitoring rdc tests';
const BUILD_PREFIX = 'insights-monitoring-rdc';

const defaultCapabilitySettings = {
  cacheId: 'jsy1v49pn10',
  newCommandTimeout: 240,
};

const capabilities = [{
  ...defaultCapabilitySettings,
  name: `${NAME_PREFIX} on iOS: ${CURRENT_TIME}`,
  build: `${BUILD_PREFIX}-ios`,
  browserName: 'safari',
  deviceName: 'iPhone.*',
  platformName: 'iOS',
}, {
  ...defaultCapabilitySettings,
  name: `${NAME_PREFIX} on Android: ${CURRENT_TIME}`,
  build: `${BUILD_PREFIX}-android`,
  browserName: 'chrome',
  deviceName: 'Samsung.*Galaxy.*',
  platformName: 'Android',
}];

exports.config = {
  ...ENV_CONFIG,
  runner: 'local',
  specs: ['./tests/specs/rdc/**/*.spec.js'],
  maxInstances: 5,
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['sauce'],
  reporters: ['spec'],
  framework: 'jasmine',
  jasmineOpts: {
    helpers: [require.resolve('@babel/register')],
    defaultTimeoutInterval: 300000,
  },
  capabilities,
  onPrepare: () => {
    testStorage.reset();
  },
};
