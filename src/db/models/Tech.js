import Sequelize from 'sequelize'

export default (sequelize) => {
    const Tech = sequelize.define('Tech',
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

    Tech.prototype.toTechModel = () => ({
        id: this.id,
        name: this.name,
    });

    return Tech;
}
