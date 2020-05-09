module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
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
            allowNull: true
            }
    }
    );
    return users;
  };
  