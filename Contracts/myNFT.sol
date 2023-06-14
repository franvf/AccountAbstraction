//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

import './myToken.sol';

contract MyNFT is ERC1155{

    using Strings for uint256;
    
    address public owner;
    string public baseURI;
    uint256 NFTPrice = 5 ether;

    MyToken myToken;

    constructor(string memory newBaseURI, address myTokenAddr) ERC1155(baseURI){
        owner = msg.sender;
        baseURI = newBaseURI;
        myToken = MyToken(myTokenAddr);
    }

    function mint(uint256 tokenId) external  {
        require(tokenId > 0 && tokenId <= 6, "Wrong token identifier");
        require(myToken.balanceOf(msg.sender) >= 5 ether, "You don't have enough tokens");
        _mint(msg.sender, tokenId, 1, "");
        tokenURI(tokenId);
        myToken.transferFrom(msg.sender, address(this), 5 ether); //Transfer 5 tokens to this contract
    }

    //URI
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }


}