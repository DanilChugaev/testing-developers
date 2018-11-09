import Sequelize from 'sequelize'

export default (sequelize) => {
  const User = sequelize.define('User', {
    login: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  User.prototype.toUserModel = () => ({
    id: this.id,
    login: this.login,
    email: this.email,
    password: this.password,
  })

  return User
}
