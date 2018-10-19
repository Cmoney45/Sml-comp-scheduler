module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("User", {
    companyName: {
      type: DataTypes.VARCHAR(255)
    },
    companyBeginHours: {
      type: DataTypes.VARCHAR(255)
    },
    companyEndHours: {
      type: DataTypes.VARCHAR(255)
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
  })
  Company.associate = (models) => {
    Company.hasMany(models.User, {
      onDelete: "cascade"
    });
  };
  return Company;
};