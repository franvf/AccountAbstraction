//SPDX-License-Identifier: UNLICENSED

pragma solidity  ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

    address private owner;
    uint256 private tokenPrize = 0.01 ether;

    modifier onlyAuthorizedAccounts()  {
        require(msg.sender == owner || balanceOf(msg.sender) < 5*10**18);
        _;
    }

    constructor() ERC20("myToken", "MTK"){
        owner = msg.sender;
        _mint(address(this), 1000000 * 10 ** 18);
    }

    function mint(uint256 amount) external onlyAuthorizedAccounts {

        //Transfer tokens to this contract address if the msg.sender is the owner
        if(msg.sender == owner){
            _mint(address(this), amount);
        } else {
            require(amount <= 5 ether, "You can just mint 5 tokens");
            _mint(msg.sender, amount);
        }
    }

    //buy tokens
    function buyTokens(uint256 amount) external payable { 
        //Amount is in wei, so we convert it to ETH
        amount *= 1 ether;
        require(balanceOf(address(this)) >= amount, "Amount exceeds contract's balance");
        uint256 totalToPay = (amount / 1 ether) * tokenPrize;
        require(msg.value == totalToPay, "Prize is not correct");
        (bool sent, ) = payable(owner).call{value: msg.value}(""); 
        require(sent, "Payment not completed");
        _transfer(address(this), msg.sender, amount);
    }

    //Send token to other accounts (send totken to friends, reward when player wins a fight)
    function sendTokens(address from, address receiver, uint256 amount) external {
        require(balanceOf(from) >= amount, "Amount exceeds sender's balance");
        _transfer(from, receiver, amount);
    }
}