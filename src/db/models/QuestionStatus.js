import Sequelize from 'sequelize'

export default (sequelize) => {
    const QuestionStatus = sequelize.define('QuestionStatus',
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            underscored: true,
            freezeTableName: true,
        },
    );

    QuestionStatus.prototype.toQuestionStatusModel = () => ({
        id: this.id,
        name: this.name,
    });

    return QuestionStatus;
}
