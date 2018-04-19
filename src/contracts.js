import Network from './network'
import contract from 'truffle-contract'

const provider = Network.provider();

function getContract(name) {
  const C = contract(require('../build/contracts/' + name + '.json'));
  C.setProvider(provider);
  return C;
}

const Jurisdiction = getContract('Jurisdiction');
const DummyValidator = getContract('DummyValidator');
const SampleToken = getContract('SampleToken');
const SampleCrowdsale = getContract('SampleCrowdsale');

export {
  Jurisdiction,
  DummyValidator,
  SampleToken,
  SampleCrowdsale
}
