module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("Company", {
    companyName: {
      type: DataTypes.STRING
    },
    companyBeginHours: {
      type: DataTypes.TIME
    },
    companyEndHours: {
      type: DataTypes.TIME
    },
    companyMinWorkers: {
      type: DataTypes.INTEGER
    },
    companyMaxWorkers: {
      type: DataTypes.INTEGER
    },
    sundayOpen: {
      type: DataTypes.BOOLEAN
    },
    mondayOpen: {
      type: DataTypes.BOOLEAN
    },
    tuesdayOpen: {
      type: DataTypes.BOOLEAN
    },
    wednesdayOpen: {
      type: DataTypes.BOOLEAN
    },
    thursdayOpen: {
      type: DataTypes.BOOLEAN
    },
    fridayOpen: {
      type: DataTypes.BOOLEAN
    },
    saturdayOpen: {
      type: DataTypes.BOOLEAN
    }
  });

  Company.associate = models => {
    Company.hasMany(models.User, {
      onDelete: "cascade"
    });
  };
  return Company;
};
