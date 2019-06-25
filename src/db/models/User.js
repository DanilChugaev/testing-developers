import Sequelize from 'sequelize'

export default (sequelize) => {
    const User = sequelize.define('User',
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            token: {
                type: Sequelize.STRING,
            },
        },
        {
            underscored: true,
            freezeTableName: true,
        },
    );

    User.prototype.toUserModel = function() {
        return {
            id: this.id,
            email: this.email,
            password: this.password,
        };
    };

    return User;
}
