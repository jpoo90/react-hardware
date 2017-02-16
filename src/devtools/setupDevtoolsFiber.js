/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
import WS from 'ws';
import {connectToDevTools} from 'react-devtools-core';

console.log('connectToDevTools');
connectToDevTools({
  isAppActive() {
    // Don't steal the DevTools from currently active app.
    return true;
  },
  // Special case: Genymotion is running on a different host.
  host: 'localhost',
  // default port? port: ,
  resolveRNStyle: null, // TODO maybe: require('flattenStyle')
});
console.log('connected ToDevTools');
