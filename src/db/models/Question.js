import Sequelize from 'sequelize'

export default (sequelize) => {
  const Question = sequelize.define('Question', {
    topic_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    img_url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  // вместо id темы нужно отправлять название темы
  // вместо id источников нужно отправлять массив этих источников
  Question.prototype.toQuestionModel = () => ({
    id: this.id,
    topic_id: this.topic_id,
    img_url: this.img_url,
    text: this.text,
  })

  return Question
}
