// import functions from all our categories
import * as cat1Functions from './cat1';
import * as cat2Functions from './cat2';

const cat1 = cat1Functions;
const cat2 = cat2Functions;

// a fun function to reveal what our "pre" vzual package is
function helloVzual() {
  return "This is a PLACE-HOLDER package, reserving the npm 'vzual' namespace for an upcoming release ... stay tuned for more info :-)";
}

// support non-default ES6 imports
//       Example:
//         import {sysg8}    from 'vzual';
//       -or-
//         import * as vzual from 'vzual';
export {
  cat1,
  cat2,
  helloVzual,
};


// support default ES6 imports
//       Example:
//         import vzual from 'vzual';
// and CommonJS modules (otherwise Babel does NOT promote them).
//       Example:
//         const {sysg8} = require('vzual');
//       -or-
//         const vzual   = require('vzual');
export default {
  cat1,
  cat2,
  helloVzual,
};
