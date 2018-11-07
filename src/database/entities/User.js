import Sequelize from 'sequelize'
import UserModel from '../../models/User'

export default (sequelize) => {
  const User = sequelize.define('user', {
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

  User.prototype.toUserModel = () => new UserModel(this.id, this.login, this.email, this.password)

  return User
}
