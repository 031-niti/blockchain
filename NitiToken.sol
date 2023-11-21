// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NitiToken is ERC20 {
    uint public exChangeRateForOneEther = 10;

    constructor() ERC20("NitiToken", "NITI") {
        _mint(address(this), 1000000 * 10 ** decimals());
    }

    function buy() payable public {
    uint tokenReceived = msg.value * exChangeRateForOneEther;
    _transfer(address(this), msg.sender, tokenReceived);
    
    // Check the recipient's balance to confirm the successful transfer
    require(balanceOf(msg.sender) >= tokenReceived, "Token transfer failed");
}
}


