/**
 * @flow
 **/

const defineProperty = Object.defineProperty;
defineProperty(global, 'WebSocket', {
  value: require('ws')
});
defineProperty(global, 'window', {
  value: global
});

require('./devtools/setupDevtoolsFiber');

const ReactHardwareFiber = require('./fiber/ReactHardwareFiber').default;
const ReactHardwareComponents = require('./components');

const ReactHardware = Object.assign(
  {},
  ReactHardwareFiber,
  ReactHardwareComponents
);

export * from './components';
export default ReactHardware;

