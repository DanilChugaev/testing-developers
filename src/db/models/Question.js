import Sequelize from 'sequelize'

export default (sequelize) => {
    const Question = sequelize.define('Question',
        {
            img_url: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            underscored: true,
            freezeTableName: true,
        },
    );

    // вместо id темы нужно отправлять название темы
    // вместо id источников нужно отправлять массив этих источников
    Question.prototype.toQuestionModel = () => ({
        id: this.id,
        img_url: this.img_url,
        text: this.text,
    });

    return Question;
}
