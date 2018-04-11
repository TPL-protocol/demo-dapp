pragma solidity ^0.4.21;

import { Jurisdiction } from "./tpl-contracts/Jurisdiction.sol";

contract DummyValidator {

  Jurisdiction jurisdiction;

  function DummyValidator(Jurisdiction _jurisdiction) {
    jurisdiction = _jurisdiction;
  }

  function validate() {
    jurisdiction.addAttribute(msg.sender, "VALID", 1);
  }

}
