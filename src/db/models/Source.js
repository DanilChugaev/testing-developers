import Sequelize from 'sequelize'

export default (sequelize) => {
    const Source = sequelize.define('Source',
        {
            question_id: {
                type: Sequelize.INTEGER,
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

    Source.prototype.toTechModel = () => ({
        id: this.id,
        question_id: this.question_id,
        text: this.text,
    });

    return Source;
}
