export const createTempUser = async function(parent, { email, password }, { db }, info) {
    try {
        return await db.User.build({ email, password }).save();
    } catch (e) {
        console.log(e);
    }
};

/**
 * Created user
 *
 * @param {object} db
 * @param {string} email
 * @param {string} password
 */
export const createUser = async function(db, email, password) {
    try {
        return await db.User.build({ email, password }).save();
    } catch (e) {
        console.log(e);
    }
};

/**
 * Deleted user by id
 *
 * @param {object} db
 * @param {number} id
 */
export const deleteUser = async function(db, id) {
    try {
        return await db.User.destroy({ where: { id } });
    } catch (e) {
        console.log(e);
    }
};

/**
 * Returned user by email
 *
 * @param {object} db
 * @param {string} email
 */
export const getUserByEmail = async function(db, email) {
    try {
        return await db.User.findOne({ where: { email } });
    } catch (e) {
        console.log(e);
    }
};

/**
 * Edits user by id
 *
 * @param {object} db
 * @param {number} id
 * @param {object} user
 */
export const editUserById = async function(db, id, user) {
    try {
        return await db.User.update(user, { where: { id } });
    } catch (e) {
        console.log(e);
    }
};
