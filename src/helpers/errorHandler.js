import {
    AuthenticationError,
    ForbiddenError,
    UserInputError,
} from 'apollo-server';

// TODO: подключить сентри

/**
 * Universal error handler
 *
 * @param {string} msg
 * @param {string} type
 * @param {string} level
 * @param {string} place
 */
export default function ({
    msg = 'Возникла ошибка. Повторите позже!',
    type = 'ForbiddenError',
    level = 'log',
    place = 'unknown',
}) {
    console[level]({
        msg,
        place,
    });

    if (type === 'AuthenticationError') {
        throw new AuthenticationError(msg);
    }

    if (type === 'ForbiddenError') {
        throw new ForbiddenError(msg);
    }

    if (type === 'UserInputError') {
        throw new UserInputError(msg);
    }
}
