/**
 * Created user
 *
 * @param {object} db
 * @param {string} email
 * @param {string} password
 */
export const createTempUser = async function(parent, { email, password }, { db }, info) {
    return await db.User.build({ email, password }).save();
};

/**
 * Created user
 *
 * @param {object} db
 * @param {string} email
 * @param {string} password
 */
export const createUser = async function(db, email, password) {
    return await db.User.build({ email, password }).save();
};

/**
 * Deleted user by id
 *
 * @param {object} db
 * @param {number} id
 */
export const deleteUser = async function(db, id) {
    return await db.User.destroy({ where: { id } });
};

/**
 * Returned user by email
 *
 * @param {object} db
 * @param {string} email
 */
export const getUserByEmail = async function(db, email) {
    return await db.User.findOne({ where: { email } });
};

/**
 * Edits user by id
 *
 * @param {object} db
 * @param {number} id
 * @param {object} user
 */
export const editUserById = async function(db, id, user) {
    return await db.User.update(user, { where: { id } });
};
