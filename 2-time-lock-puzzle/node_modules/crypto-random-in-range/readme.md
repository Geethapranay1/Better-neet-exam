# Crypto Random In Range

Pick a cryptographically-random integer within a range.

## Install

```sh
npm install --save crypto-random-in-range
```

## Usage

```ts
import inRange from 'crypto-random-in-range';

inRange ( 0, 100 ); // => 76n
inRange ( 0n, 100n ); // => 61n
inRange ( 0n, 9999999999999999999999999999999999999999n ); // => 6084146398709470868721131064012104523887n
```

## License

MIT © Fabio Spampinato
