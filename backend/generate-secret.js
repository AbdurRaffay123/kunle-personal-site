const crypto = require('crypto');

// Generate a 64-byte random string in hex format
const jwtSecret = crypto.randomBytes(64).toString('hex');

console.log('Your secure JWT_SECRET:');
console.log(jwtSecret);

// Optional: Generate multiple secrets
console.log('\nAlternative secrets:');
for (let i = 0; i < 3; i++) {
  console.log(crypto.randomBytes(64).toString('hex'));
}