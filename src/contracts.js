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
 
export {
  Jurisdiction,
  DummyValidator,
}
