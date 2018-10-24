const db = require("../..");

db.Company.bulkCreate([
  {
    companyName: "McBurgerdy",
    companyBeginHours: "00:00",
    companyEndHours: "00:00",
    companyMinWorkers: 6,
    companyMaxWorkers: 12,
    sundayOpen: true,
    mondayOpen: true,
    tuesdayOpen: true,
    wednesdayOpen: true,
    thursdayOpen: true,
    fridayOpen: true,
    saturdayOpen: true
  },
  {
    companyName: "Local Advertising Callcenter",
    companyBeginHours: "08:00",
    companyEndHours: "20:00",
    companyMinWorkers: 5,
    companyMaxWorkers: 20,
    sundayOpen: false,
    mondayOpen: true,
    tuesdayOpen: true,
    wednesdayOpen: true,
    thursdayOpen: true,
    fridayOpen: true,
    saturdayOpen: false
  }
]);
