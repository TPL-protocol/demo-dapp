# TPL sample dapp

A simple dapp to showcase the usage of TPL contracts with a token that enforces all transfers. The dapp requires the following contracts to be deployed on Ropsten:

* A multisig wallet contract to act as RootDAO, which is the owner of the Jurisdiction.
* A fake Validator/CA, with methods that automatically register an address as part of the jurisdiction, with a pre-defined max amount to transact. As additional goodies, consider requiring a [simple proof of work](https://github.com/OpenZeppelin/zeppelin-solidity/issues/727) to whitelist someone, or even adding a _report someone_ feature that automatically halves their maximum transactable amount.
* An ERC20 token that requires full compliance with TPL on the jurisdiction.
* A continuous crowdsale that returns tokens in exchange for ETH, without a cap. Consider non-constant pricing strategies, such as bonded curves, just for the sake of it.

The dapp would then have the following different sections:

* A token section, where users can buy new tokens from the crowdsale contract, check their token balance, and initiate a new transaction to another address.
* A validator section, where users can apply to included in the jurisdiction through the fake validator
* A jurisdiction section, where users can query the state of any address (including their own) within the jurisdiction
