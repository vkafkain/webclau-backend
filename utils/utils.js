const argon2 = require("argon2")

const hashPassword = async (password) => 
argon2.hash(password)

module.exports = {
    hashPassword
}