import Sequelize from 'sequelize'

export default (sequelize) => {
  const User = sequelize.define('User', {
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
    email: this.email,
    password: this.password,
  })

  return User
}
