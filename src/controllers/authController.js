import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import errorHandler from '../helpers/errorHandler';
import {
    getUserByEmail,
    createUser,
    editUserById,
} from './userController';

const getRandomString = () => [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('');

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
        const passwordComparisonResult = await bcrypt.compare(password, user.password);

        if (!passwordComparisonResult) {
            errorHandler({
                msg: 'Пароль не совпадает!',
                type: 'AuthenticationError',
                level: 'warn',
                place: 'authUser',
            });
        }

        const token = jwt.sign({
            email,
            password,
        }, getRandomString());

        user.token = `Bearer ${token}`;

        await editUserById(db, user.id, user);

        return user;
    }

    errorHandler({
        msg: 'Такого пользователя не существует!',
        type: 'AuthenticationError',
        level: 'warn',
        place: 'authUser',
    });
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
    let candidate = await getUserByEmail(db, email);

    if (candidate) {
        errorHandler({
            msg: 'Такой пользователь уже существует!',
            type: 'AuthenticationError',
            level: 'warn',
            place: 'authUser',
        });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    return await createUser(db, email,passwordHash);
};

// TODO: сделать еще восстановление пароля.
// TODO: при регистрации проверять емэйл (отправлять письмо на почту)
