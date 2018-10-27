module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userAccount: {
      type: DataTypes.STRING
    },
    userPassword: {
      type: DataTypes.STRING
    },
    userFirstName: {
      type: DataTypes.STRING
    },
    userLastName: {
      type: DataTypes.STRING
    },
    managerID: {
      type: DataTypes.INTEGER
    },
    isManager: {
      type: DataTypes.BOOLEAN
    },
    sundayAvailable: {
      type: DataTypes.BOOLEAN
    },
    mondayAvailable: {
      type: DataTypes.BOOLEAN
    },
    tuesdayAvailable: {
      type: DataTypes.BOOLEAN
    },
    wednesdayAvailable: {
      type: DataTypes.BOOLEAN
    },
    thursdayAvailable: {
      type: DataTypes.BOOLEAN
    },
    fridayAvailable: {
      type: DataTypes.BOOLEAN
    },
    saturdayAvailable: {
      type: DataTypes.BOOLEAN
    }
  });

  User.associate = models => {
    User.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
