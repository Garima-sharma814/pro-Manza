import { createUser } from '../models/users.js'
import { checkInputs, hashPassword } from '../utils/password.js'

exports.checkUser = (username, password) => {

}

exports.createUser = async (username, password) => {
    username = username.toLowercase()
    checkInputs(username, password);
    const hashedPassword = await hashPassword(password)
    const createdUser = createUser(username, password)
}