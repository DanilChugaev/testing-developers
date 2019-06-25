import Sequelize from 'sequelize'

export default (sequelize) => {
    const Answer = sequelize.define('Answer',
        {
            question_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            is_correct: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        },
        {
            underscored: true,
            freezeTableName: true,
        },
    );

    // вместо id вопроса нужно отправлять название вопроса
    Answer.prototype.toAnswerModel = () => ({
        id: this.id,
        question_id: this.question_id,
        text: this.text,
        is_correct: this.is_correct,
    });

    return Answer;
}
