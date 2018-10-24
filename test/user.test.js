const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const db = require("../models");
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/users/", () => {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all users", done => {
    // Add some examples to the db to test with
    db.User.bulkCreate([
      {
        userAccount: "misterManager",
        userPassword: "password",
        userFirstName: "Mister",
        userLastName: "Manager",
        managerID: 1,
        isManager: 1,
        sundayAvailable: 1,
        mondayAvailable: 1,
        tuesdayAvailable: 1,
        wednesdayAvailable: 1,
        thursdayAvailable: 1,
        fridayAvailable: 1,
        saturdayAvailable: 1,
        CompanyId: 1
      },
      {
        userAccount: "steveGobs",
        userPassword: "password",
        userFirstName: "Steve",
        userLastName: "Gobs",
        managerID: 1,
        isManager: 0,
        sundayAvailable: 1,
        mondayAvailable: 1,
        tuesdayAvailable: 1,
        wednesdayAvailable: 1,
        thursdayAvailable: 1,
        fridayAvailable: 1,
        saturdayAvailable: 1,
        CompanyId: 1
      },
      {
        userAccount: "collinStrive",
        userPassword: "password",
        userFirstName: "Collin",
        userLastName: "Strive",
        managerID: 1,
        isManager: 0,
        sundayAvailable: 1,
        mondayAvailable: 0,
        tuesdayAvailable: 1,
        wednesdayAvailable: 1,
        thursdayAvailable: 1,
        fridayAvailable: 1,
        saturdayAvailable: 1,
        CompanyId: 1
      },
      {
        userAccount: "karitaHyacinthe",
        userPassword: "password",
        userFirstName: "Karita",
        userLastName: "Hyacinthe",
        managerID: 1,
        isManager: 0,
        sundayAvailable: 0,
        mondayAvailable: 1,
        tuesdayAvailable: 1,
        wednesdayAvailable: 1,
        thursdayAvailable: 1,
        fridayAvailable: 0,
        saturdayAvailable: 1,
        CompanyId: 1
      },
      {
        userAccount: "erastosStephanie",
        userPassword: "password",
        userFirstName: "Erastos",
        userLastName: "Stephanie",
        managerID: 1,
        isManager: 0,
        sundayAvailable: 1,
        mondayAvailable: 0,
        tuesdayAvailable: 1,
        wednesdayAvailable: 0,
        thursdayAvailable: 1,
        fridayAvailable: 0,
        saturdayAvailable: 1,
        CompanyId: 1
      }
    ]).then(() => {
      // Request the route that returns all examples
      request.get("/api/users/").end((err, res) => {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(5);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            userAccount: "misterManager",
            userPassword: "password",
            userFirstName: "Mister",
            userLastName: "Manager",
            managerID: 1,
            isManager: true,
            sundayAvailable: true,
            mondayAvailable: true,
            tuesdayAvailable: true,
            wednesdayAvailable: true,
            thursdayAvailable: true,
            fridayAvailable: true,
            saturdayAvailable: true,
            CompanyId: 1
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            userAccount: "steveGobs",
            userPassword: "password",
            userFirstName: "Steve",
            userLastName: "Gobs",
            managerID: 1,
            isManager: false,
            sundayAvailable: true,
            mondayAvailable: true,
            tuesdayAvailable: true,
            wednesdayAvailable: true,
            thursdayAvailable: true,
            fridayAvailable: true,
            saturdayAvailable: true,
            CompanyId: 1
          });

        expect(responseBody[2])
          .to.be.an("object")
          .that.includes({
            userAccount: "collinStrive",
            userPassword: "password",
            userFirstName: "Collin",
            userLastName: "Strive",
            managerID: 1,
            isManager: false,
            sundayAvailable: true,
            mondayAvailable: false,
            tuesdayAvailable: true,
            wednesdayAvailable: true,
            thursdayAvailable: true,
            fridayAvailable: true,
            saturdayAvailable: true,
            CompanyId: 1
          });

        expect(responseBody[3])
          .to.be.an("object")
          .that.includes({
            userAccount: "karitaHyacinthe",
            userPassword: "password",
            userFirstName: "Karita",
            userLastName: "Hyacinthe",
            managerID: 1,
            isManager: false,
            sundayAvailable: false,
            mondayAvailable: true,
            tuesdayAvailable: true,
            wednesdayAvailable: true,
            thursdayAvailable: true,
            fridayAvailable: false,
            saturdayAvailable: true,
            CompanyId: 1
          });

        expect(responseBody[4])
          .to.be.an("object")
          .that.includes({
            userAccount: "erastosStephanie",
            userPassword: "password",
            userFirstName: "Erastos",
            userLastName: "Stephanie",
            managerID: 1,
            isManager: false,
            sundayAvailable: true,
            mondayAvailable: false,
            tuesdayAvailable: true,
            wednesdayAvailable: false,
            thursdayAvailable: true,
            fridayAvailable: false,
            saturdayAvailable: true,
            CompanyId: 1
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
