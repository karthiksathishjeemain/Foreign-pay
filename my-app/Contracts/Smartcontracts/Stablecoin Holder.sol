// SPDX-License-Identifier: SEE LICENSE IN LICENSE
import {Stablecoin} from "./Stablecoin.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
pragma solidity ^0.8.9;
contract StablecoinHolder  {
    constructor() {
        //   i_dsc = Stablecoin(dscAddress);
    }
event DSCTransfered(address indexed from, address indexed to, uint256 value);
 Stablecoin public i_dsc;
    // mapping(address => uint256) public s_DSCMinted;
    function mintDsc(uint256 amountDscToMint) public{
  
     i_dsc.mint(address(this), amountDscToMint);
}
    function transferDSC(address to, uint256 amount) public {
        i_dsc.transfer(address(this),to, amount);
        emit DSCTransfered(address(this), to, amount);
    }
}