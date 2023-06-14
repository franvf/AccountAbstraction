# Abstract

This project was started for me to learn about account abstraction, but I have learned a lot, not just account abstraction but thirdweb also.

1. What is account abstraction?
AA is a new way to use our wallet accounts in EVM blockchains. If you think about that, currently we are very limmited using EOAs as user accounts because these kinds of accounts has some drawbacks like just allow to launch one transaction per time, or self-custody, where we have to manage our seed phrase, and if we lost it we also lose the access to our money and NFTs. With AA all these problems dissapear. AA is just use an smart contract as our EOA which allow us to create more powerful wallets. These kind of wallets are known as Smart Wallets, or smart contract wallets. Actually AA is not just use an smart contract as a wallet, this is just the tip of the iceberg. If you want to know more about AA and ERC-4337 I recommend you to read [this](https://beincrypto.com/learn/erc-4337/) post.

2. What is thirdweb?
Thridweb is a group of tools that allow us to build and deploy decentralized applications (DAPPs). The Thirdweb SDK can work with a lot of languages like go, python or typescript, and also also is able to work with React, React Native and Unity for game developers. In addition it has an SDK to work with solidity and deploy our contracts and integrate them with their platform (which is very useful and intuitive). I choosed this platform because it allow to implement AA in a very easy way, and also create wallets using a password like in web2. In addition it is also possible to create an smart wallet from our current EOA account, just connecting our EOA to our DAPP. If you want to learn more about thirdweb you can read their documentation [here](https://portal.thirdweb.com/)

# How to use
If you want to run this project in your machine you can follow the next steps: 

1. Create a thirdweb account
2. Go to `Contracts` tab.
3. Scroll down to Smart Wallet (Beta) section and select the kind of wallet factory you want to deploy. 
4. Select the chain and click deploy now button.

Now that the smart wallet factory contract is deployed, you can see it in your dashboard
