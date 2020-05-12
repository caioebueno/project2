module.exports = function(sequelize, DataTypes) {
    var services = sequelize.define("services", {
        title:   {
                type: DataTypes.STRING,
                allowNull: false
            },
        desc:  {
                type: DataTypes.TEXT,
                allowNull: false
            },
        highlights: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        img:    {
            type: DataTypes.TEXT,
            allowNull: false
            },
        vendor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        day: {
            type: DataTypes.TEXT,
            allowNull: false
        }
        
    }
    );
    return services;
  };
  