const crypto = require("crypto")

const PROBLEM_STATEMENT = `What is 2+2?`
const OPTION1 = `4`
const OPTION2 = `5`
const OPTION3 = `6`
const OPTION4 = `7`

function encrypt(text, key, iv) {
    const algorithm = 'aes-256-cbc'

    const cipher = crypto.createCipheriv(algorithm, key, iv)

    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted;
}

function decrypt(encrypted, key, iv) {
    const algorithm = 'aes-256-cbc'

    const decipher = crypto.createDecipheriv(algorithm, key, iv)

    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted;
}

const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)
console.log(`Key: ${key.toString('hex')}`)
console.log(`IV: ${iv.toString('hex')}`)

const encryptedProblemStatement = encrypt(PROBLEM_STATEMENT, key, iv)
const encryptedOption1 = encrypt(OPTION1, key, iv)
const encryptedOption2 = encrypt(OPTION2, key, iv)
const encryptedOption3 = encrypt(OPTION3, key, iv)
const encryptedOption4 = encrypt(OPTION4, key, iv)

console.log(`Encrypted Problem Statement: ${encryptedProblemStatement}`)
console.log(`Encrypted Option 1: ${encryptedOption1}`)
console.log(`Encrypted Option 2: ${encryptedOption2}`)
console.log(`Encrypted Option 3: ${encryptedOption3}`)
console.log(`Encrypted Option 4: ${encryptedOption4}`)

const decryptedProblemStatement = decrypt(encryptedProblemStatement, key, iv)
const decryptedOption1 = decrypt(encryptedOption1, key, iv)
const decryptedOption2 = decrypt(encryptedOption2, key, iv)
const decryptedOption3 = decrypt(encryptedOption3, key, iv)
const decryptedOption4 = decrypt(encryptedOption4, key, iv)

console.log(`Decrypted Problem Statement: ${decryptedProblemStatement}`)
console.log(`Decrypted Option 1: ${decryptedOption1}`)
console.log(`Decrypted Option 2: ${decryptedOption2}`)
console.log(`Decrypted Option 3: ${decryptedOption3}`)
console.log(`Decrypted Option 4: ${decryptedOption4}`)

