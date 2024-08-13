
/* IMPORT */

import {describe} from 'fava';
import inRange from '../dist/index.js';

/* MAIN */

describe ( 'Crypto Random In Range', it => {

  it ( 'picks a randomly distributed number within a range', t => {

    const allowed = new Set ( Array.from ( new Array ( 100 ).keys () ).map ( BigInt ) );
    const missing = new Set ( allowed );

    for ( let i = 0; i < 1000; i++ ) {

      const nr = inRange ( 0, 100 );

      t.true ( allowed.has ( nr ) );

      missing.delete ( nr );

    }

    t.is ( missing.size, 0 );

  });

  it ( 'works with various ranges', t => {

    for ( const [min, max] of [[0n, 100n], [0n, 1000n], [1000n, 1000000n]] ) {

      for ( let i = 0; i < 25000; i++ ) {

        const nr = inRange ( min, max );

        t.true ( nr >= min && nr <= max );

      }

    }

  });

});
