module.exports = (sequelize, DataTypes) => {
  const TimeOff = sequelize.define("TimeOff", {
    companyName: {
      type: DataTypes.STRING
    },
    beginHours: {
      type: DataTypes.TIME
    },
    endHours: {
      type: DataTypes.TIME
    },
    date: {
      type: DataTypes.DATEONLY
    },
    status: {
      type: DataTypes.BOOLEAN
    }
  });

  TimeOff.associate = models => {
    TimeOff.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return TimeOff;
};
