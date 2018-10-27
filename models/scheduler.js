module.exports = (sequelize, DataTypes) => {
  const Scheduler = sequelize.define("Scheduler", {
    scheduledDate: {
      type: DataTypes.DATE
    },
    scheduledBeginHour: {
      type: DataTypes.TIME
    },
    scheduledEndHour: {
      type: DataTypes.TIME
    },
    name: {
      type: DataTypes.STRING
    },
    sunStart: {
      type: DataTypes.STRING
    },
    sunEnd: {
      type: DataTypes.STRING
    },
    monStart: {
      type: DataTypes.STRING
    },
    monEnd: {
      type: DataTypes.STRING
    },
    tueStart: {
      type: DataTypes.STRING
    },
    tueEnd: {
      type: DataTypes.STRING
    },
    wedStart: {
      type: DataTypes.STRING
    },
    wedEnd: {
      type: DataTypes.STRING
    },
    thurStart: {
      type: DataTypes.STRING
    },
    thurEnd: {
      type: DataTypes.STRING
    },
    friStart: {
      type: DataTypes.STRING
    },
    friEnd: {
      type: DataTypes.STRING
    },
    satStart: {
      type: DataTypes.STRING
    },
    satEnd: {
      type: DataTypes.STRING
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
