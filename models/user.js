module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userAccount: {
      type: DataTypes.VARCHAR(255),

    },
      userPassword: {
      type: DataTypes.VARCHAR(255),

      },
      userFirstName: {
      type: DataTypes.VARCHAR(255),

    },
    userLastName: {
      type: DataTypes.VARCHAR(255),

    },
    managerID: {
      type: DataTypes.INT,

    },
    userFirstName: {
      type: DataTypes.FLOAT(2),

    },
    isManager: {
      type: DataTypes.BOOLEAN,

    },
    sundayAvailable: {
      type: DataTypes.BOOLEAN,

    },
    mondayAvailable: {
      type: DataTypes.BOOLEAN,

    },
    tuesdayAvailable: {
      type: DataTypes.BOOLEAN,

    },
    wednesdayAvailable: {
      type: DataTypes.BOOLEAN,

    },
    thursdayAvailable: {
      type: DataTypes.BOOLEAN,

    },
    fridayAvailable: {
      type: DataTypes.BOOLEAN,

    },
    saturdayAvailable: {
      type: DataTypes.BOOLEAN,

    },
  });

  User.associate = (models) => {
    User.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
