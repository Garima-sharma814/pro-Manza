import { hash } from 'bcryptjs';
const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.hashPassword = async (password) => {
    return await hash(password, 10)
}

exports.checkInputs = (username, password) => {
    if (!username || !password)
        throw new error('Username and password are required')

    if (!emailRegex.test(username))
        throw new error('Username should be a valid email format')

    if (password.length < 6 || /^[\s]+$/.test(password))
        throw new error('Password should be atleat 6 alphanumeric characters with special characters')
}