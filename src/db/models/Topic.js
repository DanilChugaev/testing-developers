import Sequelize from 'sequelize'

export default (sequelize) => {
  const Topic = sequelize.define('Topic', {
    tech_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  // вместо id темы нужно отправлять название
  Topic.prototype.toTopicModel = () => ({
    id: this.id,
    tech_id: this.tech_id,
    name: this.name,
  })

  return Topic
}
