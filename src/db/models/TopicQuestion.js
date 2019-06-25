import Sequelize from 'sequelize'

export default (sequelize) => {
    const TopicQuestion = sequelize.define('TopicQuestion',
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            question_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            topic_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            underscored: true,
            freezeTableName: true,
        },
    );

    // UserQuestion.prototype.toUserQuestionModel = () => ({
    //   id: this.id,
    //   user_id: this.user_id,
    //   question_id: this.question_id,
    //   status_id: this.status_id,
    //   score: this.score,
    //   is_favorite: this.is_favorite,
    //   is_answered_correct: this.is_answered_correct,
    // })

    return TopicQuestion;
}
