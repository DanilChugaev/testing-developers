import Sequelize from 'sequelize'

export default (sequelize) => {
    const UserQuestion = sequelize.define('UserQuestion',
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            question_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            question_status_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            score: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            is_favorite: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            is_answered_correct: {
                type: Sequelize.BOOLEAN,
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

    return UserQuestion;
}
