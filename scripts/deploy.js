#!/usr/bin/env node

const Web3 = require('web3');
const contract = require('truffle-contract');

// [FIXME] allow different nodes for different environments
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

function getContract(name, gas) {
  const C = contract(require('../build/contracts/' + name + '.json'));
  C.setProvider(provider);
  C.defaults({ from: web3.eth.accounts[0], gas: gas });
  return C;
}

async function main() {
  const Jurisdiction = getContract('Jurisdiction', 1000000);
  const jurisdiction = await Jurisdiction.new();
  console.log("Jurisdiction\t" + jurisdiction.address);

  const DummyValidator = getContract('DummyValidator', 1000000);
  const validator = await DummyValidator.new(jurisdiction.address);
  console.log("DummyValidator\t" + validator.address);

  await jurisdiction.addValidator(validator.address);

  const SampleToken = getContract('SampleToken', 2000000);
  const sampleToken = await SampleToken.new(jurisdiction.address);
  console.log("SampleToken\t" + sampleToken.address);

  const SampleCrowdsale = getContract('SampleCrowdsale', 2000000);
  const sampleCrowdsale = await SampleCrowdsale.new(1000, 0x1f3a8427250a6c580853dae603d02eeb93b55ed0, sampleToken.address);
  await sampleToken.transferOwnership(sampleCrowdsale.address);
  console.log("SampleCrowdsale\t" + sampleCrowdsale.address);
}

main().catch(console.error);
