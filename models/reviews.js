module.exports = function(sequelize, DataTypes) {
    var reviews = sequelize.define("reviews", {
        id_user:   {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        stars:  {
                type: DataTypes.INTEGER,
                allowNull: false   
            },
        review: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        id_service: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
    }
    );
    return reviews;
  };
  