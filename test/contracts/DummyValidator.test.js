const Jurisdiction = artifacts.require('Jurisdiction');
const DummyValidator = artifacts.require('DummyValidator');

var should = require('chai').should();

contract('DummyValidator', function ([investor]) {

    beforeEach(async function () {
        this.jurisdiction = await Jurisdiction.new();
        this.dummyValidator = await DummyValidator.new(this.jurisdiction.address);
        await this.jurisdiction.addValidator(this.dummyValidator.address);
    });

    it('should validate', async function () {
        await this.dummyValidator.validate({from: investor});
        (await this.jurisdiction.hasAttribute(investor, 'VALID')).should.be.true;
    });
});
