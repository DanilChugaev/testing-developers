import Sequelize from 'sequelize'

export default (sequelize) => {
  const Tech = sequelize.define('Tech', {
    question_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  Tech.prototype.toTechModel = () => ({
    id: this.id,
    question_id: this.question_id,
    text: this.text,
  })

  return Tech
}
