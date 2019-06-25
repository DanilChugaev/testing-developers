import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import {
    getUserByEmail,
    createUser,
    editUserById,
} from './userController';

const randomString = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('');

/**
 * User authorization
 *
 * @param parent
 * @param email
 * @param password
 * @param db
 * @param info
 */
export const authUser = async function(parent, { email, password }, { db }, info) {
    const candidate = await getUserByEmail(db, email);

    if (candidate) {
        const user = candidate.toUserModel();

        if (user.password !== password) {
            throw new AuthenticationError('Пароль не совпадает!');
        }

        user.token = jwt.sign({
            email,
            password,
        }, randomString);

        await editUserById(db, user.id, user);

        return user;
    }
    // TODO: создать logger куда посылать ошибки (там подключить сентри)
    throw new AuthenticationError('Такого пользователя не существует!');
};

/**
 * User registration
 *
 * @param parent
 * @param email
 * @param password
 * @param db
 * @param info
 */
export const regUser = async function(parent, { email, password }, { db }, info) {
    let candidate;

    try {
        candidate = await getUserByEmail(db, email);
    } catch (e) {
        console.log(e);
    }

    if (candidate) {
        throw new AuthenticationError('Такой пользователь уже существует!');
    }

    try {
        return await createUser(db, email,password);
    } catch (e) {
        console.log(e);
    }
};
