
/* IMPORT */

import benchmark from 'benchloop';
import inRange from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: '0:100',
  fn: () => {
    inRange ( 0, 100 );
  }
});

benchmark ({
  name: '0:1000',
  fn: () => {
    inRange ( 0, 1000 );
  }
});

benchmark ({
  name: '1000:1000000',
  fn: () => {
    inRange ( 1000, 1000000 );
  }
});

benchmark.summary ();
