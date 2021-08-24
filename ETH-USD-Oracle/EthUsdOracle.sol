// SPDX-License-Identifier: MIT 
pragma solidity 0.6.6;

import "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol"; /* !UPDATE, import aggregator contract */

contract EthUsdOracle {
  AggregatorV3Interface internal ethUsd;
  uint256 internal fee;
  address public admin;

  event Received(address indexed sender, uint256 amount);
  
  modifier onlyAdmin() {
    require(msg.sender == admin, "Caller is not the admin");
    _;
  }

  constructor() public {
    fee = 0.1 * 10 ** 18; // 0.1 LINK
    admin = msg.sender;
    ethUsd = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e); // Rinkeby testnet
  }

  receive() external payable {
    emit Received(msg.sender, msg.value);
  }

    /** !UPDATE
   * 
   * ethUsd - latest price from Chainlink oracles (ETH in USD * 10**8).
   * weiUsd - USD in Wei, received by dividing:
   *          ETH in Wei (converted to compatibility with etUsd (10**18 * 10**8)),
   *          by ethUsd.
   */

  function ethInUsd() public view returns (int) {
    (
      uint80 roundId,
      int price,
      uint startedAt,
      uint timeStamp,
      uint80 answerInRound
    ) = ethUsd.latestRoundData();

    return price;
  }

  function weiInUsd() public view returns (uint) {
    int ethUsd = ethInUsd();
    int weiUsd = 10**26/ethUsd;

    return uint(weiUsd);
  }

  //  To be able to fetch the ETH price in USD, send some ETH and some 
  //  LINK tokens (e.g. 0.1 of each, or more) to the newly created 
  //  contract address

}
