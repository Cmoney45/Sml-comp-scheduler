const createCompanies = require("./imports/1companyImport");
const createCompanyUsers1 = require("./imports/2companyImport");
const createCompanyUsers2 = require("./imports/3companyImports");

module.exports = run = () => {
  createCompanies();
  createCompanyUsers1();
  createCompanyUsers2();
};
