const Jurisdiction = artifacts.require('Jurisdiction');
const SampleToken = artifacts.require('SampleToken');
const SampleCrowdsale = artifacts.require('SampleCrowdsale');

const BigNumber = web3.BigNumber;

var should = require('chai')
        .use(require('chai-as-promised'))
        .use(require('chai-bignumber')(BigNumber))
        .should();

contract('SampleCrowdsale', function ([owner, wallet, investor]) {

    const RATE = new BigNumber(1);

    beforeEach(async function () {
        this.jurisdiction = await Jurisdiction.new();
        await this.jurisdiction.addValidator(owner);

        this.token = await SampleToken.new(this.jurisdiction.address);
        this.crowdsale = await SampleCrowdsale.new(
            RATE, wallet, this.token.address);
        await this.token.transferOwnership(this.crowdsale.address);
    });

    it('should create crowdsale with correct parameters', async function () {
        (await this.crowdsale.rate()).should.be.bignumber.equal(RATE);
        (await this.crowdsale.wallet()).should.be.equal(wallet);
    });

    it('should not accept payment not validated', async function () {
        const investmentAmount = new BigNumber(web3.toWei(1, 'ether'));
        await this.crowdsale.buyTokens(
            investor,
            { value: investmentAmount, from: investor }
        ).should.be.rejectedWith('revert');
        (await this.token.balanceOf(investor))
            .should.be.bignumber.equal(0);
        (await this.token.totalSupply())
            .should.be.bignumber.equal(0);
    });

    it('should accept payment validated', async function () {
        await this.jurisdiction.addAttribute(investor, 'VALID', 1);

        const investmentAmount = new BigNumber(web3.toWei(1, 'ether'));
        await this.crowdsale.buyTokens(
            investor,
            { value: investmentAmount, from: investor }
        ).should.be.fulfilled;
        (await this.token.balanceOf(investor))
            .should.be.bignumber.equal(investmentAmount);
        (await this.token.totalSupply())
            .should.be.bignumber.equal(investmentAmount);
    });
});
