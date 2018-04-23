pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import { Jurisdiction } from "./tpl-contracts/Jurisdiction.sol";


/**
 * @title SampleToken
 * @dev Mintable ERC20 Token.
 */
contract SampleToken is MintableToken {

  Jurisdiction jurisdiction;

  string public constant name = "SampleToken";  // solium-disable-line uppercase
  string public constant symbol = "TPL";  // solium-disable-line uppercase
  uint8 public constant decimals = 18;  // solium-disable-line uppercase

  function SampleToken(Jurisdiction _jurisdiction) public {
    jurisdiction = _jurisdiction;
    totalSupply_ = 0;
  }

  function mint(address _to, uint256 _amount)
    onlyOwner
    canMint
    public
    returns (bool)
  {
    require(jurisdiction.hasAttribute(_to, "VALID"));
    return super.mint(_to, _amount);
  }

  function transfer(address _to, uint256 _value) public returns (bool) {
    require(jurisdiction.hasAttribute(_to, "VALID"));
    return super.transfer(_to, _value);
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
    require(jurisdiction.hasAttribute(_to, "VALID"));
    return super.transferFrom(_from, _to, _value);
  }
}
