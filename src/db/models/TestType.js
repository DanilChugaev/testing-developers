import Sequelize from 'sequelize'

export default (sequelize) => {
    const TestType = sequelize.define('TestType',
        {
            name: {
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

    TestType.prototype.toTestTypeModel = () => ({
        id: this.id,
        name: this.name,
        text: this.text,
    });

    return TestType;
}
