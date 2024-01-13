// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Stablecoin is ERC20 {
    address public minter;

    constructor() ERC20("StableCoin", "STB") {
        // minter = msg.sender;
    }


    function mint(address to, uint256 amount) public returns (bool) {
        // require(msg.sender == minter, "Only minter can mint tokens");
        _mint(to, amount);
        return true;
    }
    function transfer(address from,address to, uint256 amount) public  returns (bool) {
        _transfer(from, to, amount);
        return true;
    }
}