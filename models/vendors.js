module.exports = function(sequelize, DataTypes) {
    var vendors = sequelize.define("vendors", {
        email:   {
                type: DataTypes.STRING,
                allowNull: false
            },
        name:  {
                type: DataTypes.STRING,
                allowNull: false
            },
        password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        phone:    {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    );
    return vendors;
  };
  