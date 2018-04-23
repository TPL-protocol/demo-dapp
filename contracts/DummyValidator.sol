pragma solidity ^0.4.21;

import { Jurisdiction } from "./tpl-contracts/Jurisdiction.sol";


contract DummyValidator {

  Jurisdiction jurisdiction;

  function DummyValidator(Jurisdiction _jurisdiction) public {
    jurisdiction = _jurisdiction;
  }

  function validate() public {
    jurisdiction.addAttribute(msg.sender, "VALID", 1);
  }

}
