const sss = require('shamirs-secret-sharing');

const secret = Buffer.from('Encryption Key');
const shares = sss.split(secret, { shares: 5, threshold: 3 });
const smallestShares = shares.slice(0, 3);
const recoverd = sss.combine(smallestShares)


console.log(secret)

console.log(shares.map(share => share.toString()))
console.log(recoverd.toString())


