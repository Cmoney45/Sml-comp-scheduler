const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");
const db = require("../../models");
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/company/", () => {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all companies", done => {
    // Add some examples to the db to test with
    db.Company.bulkCreate([
      {
        companyName:"McBurgerdy", 
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
        companyName:"Local Advertising Callcenter",
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
    ]).then(() => {
      // Request the route that returns all examples
      request.get("/api/company/").end((err, res) => {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            companyName:"McBurgerdy", 
            companyBeginHours: "00:00:00",
            companyEndHours: "00:00:00",
            companyMinWorkers: 6,
            companyMaxWorkers: 12,
            sundayOpen: true,
            mondayOpen: true,
            tuesdayOpen: true,
            wednesdayOpen: true,
            thursdayOpen: true,
            fridayOpen: true,
            saturdayOpen: true
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            companyName:"Local Advertising Callcenter",
            companyBeginHours: "08:00:00",
            companyEndHours: "20:00:00",
            companyMinWorkers: 5,
            companyMaxWorkers: 20,
            sundayOpen: false,
            mondayOpen: true,
            tuesdayOpen: true,
            wednesdayOpen: true,
            thursdayOpen: true,
            fridayOpen: true,
            saturdayOpen: false
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
