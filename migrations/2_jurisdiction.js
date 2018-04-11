const Jurisdiction = artifacts.require("Jurisdiction");
const DummyValidator = artifacts.require("DummyValidator");

module.exports = function (deployer) {
  deployer.deploy(Jurisdiction).then(function () {
      deployer.deploy(DummyValidator, Jurisdiction.address).then(function () {
        const jur = new Jurisdiction(Jurisdiction.address);
        return jur.addValidator(DummyValidator.address).then(function () {
          console.log("Validator added");
        }).catch(console.log);
      });
  });
};
