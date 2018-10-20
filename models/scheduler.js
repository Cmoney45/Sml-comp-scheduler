module.exports = (sequelize, DataTypes) => {
  const Scheduler = sequelize.define("Squeduler", {
    scheduledDate: {
      type: DataTypes.DATE
    },
    scheduledBeginHour: {
      type: DataTypes.TIME
    },
    scheduledEndHour: {
      type: DataTypes.TIME
    }
  });

  Scheduler.associate = models => {
    Scheduler.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Scheduler;
};
