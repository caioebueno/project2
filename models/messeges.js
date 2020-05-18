module.exports = function(sequelize, DataTypes) {
    var messeges = sequelize.define("messeges", {
        msg:   {
                type: DataTypes.TEXT,
                allowNull: false
            },
        msg_id:  {
                type: DataTypes.STRING,
                allowNull: false
            },
        user: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
       
    }
    );
    return messeges;
  };
  