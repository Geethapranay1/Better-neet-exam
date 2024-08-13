
/* IMPORT */

import random from 'crypto-random-bigint';

/* MAIN */

const inRange = ( min: number | bigint, max: number | bigint ): bigint => {

  min = BigInt ( min );
  max = BigInt ( max );

  if ( min < 0n || max < 0n ) throw new Error ( 'Negative ranges are not supported' );

  if ( max <= min ) throw new Error ( '"max" must be at least equal to "min" plus 1' );

  const interval = max - min - 1n;
  const intervalBits = interval.toString ( 2 ).length;

  while ( true ) {

    const nr = random ( intervalBits );

    if ( nr > interval ) continue; // Out of range, it's not safe to truncate it, better to throw it away

    return nr + min;

  }

};

/* EXPORT */

export default inRange;
