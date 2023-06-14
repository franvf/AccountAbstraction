# Abstract

I started this project to learn about account abstraction, but I have learned many other things, like thirdweb.

1. What is account abstraction?
AA is a new way to use our wallet accounts in EVM blockchains. If you think about that, currently, we are very limited in using EOAs as user accounts because these accounts have some drawbacks, like just allowing us to launch one transaction per time. Self-custody is another drawback because we have to manage our seed phrase; if we lose it, we also lose access to our money and NFTs. With AA, all these problems disappear. AA just uses a smart contract as our EOA, allowing us to create more powerful wallets. These kinds of wallets are known as Smart Wallets or smart contract wallets. AA is not just using a smart contract as a wallet; this is just the tip of the iceberg. If you want to know more about AA and ERC-4337, I recommend you to read [this](https://beincrypto.com/learn/erc-4337/) post.

This project was started for me to learn about account abstraction, but I have learned a lot, not just account abstraction but thirdweb also.

2. What is thirdweb?
Thridweb is a group of tools that allow us to build and deploy decentralized applications (DAPPs). The Thirdweb SDK can work with many languages like Go, Python, or Typescript, and it also can work with React, React Native, and Unity for game developers. In addition, it has an SDK to work with solidity, deploy our contracts, and integrate them with their platform (which is very useful and intuitive). I chose this platform because it allows us to implement AA very easily and create wallets using a password like in web2. In addition, it is also possible to create a smart wallet from our current EOA account just by connecting our EOA to our DAPP. If you want to learn more about thirdweb you can read their documentation [here](https://portal.thirdweb.com/)

# How to use
If you want to run this project on your machine, you can follow the next steps: 

1. Create a thirdweb account
2. Go to the `Contracts` tab.
3. Scroll down to Smart Wallet (Beta) section and select the kind of wallet factory you want to deploy. 
4. Select the chain and click the `deploy now` button.

Now that the smart wallet factory contract is deployed, you can see it in your dashboard.

5. Get a thirdweb API Key: Go to the `settings` tab and click on the `create new key` button
6. Clone this project in your machine. As you can see, this project has two main directories. The contracts directory has the two smart contracts I used to build this app. You can deploy them using your favorite frameworks, like Hardhat, foundry, or Truffle. The second one is the DAPP directory, where all the DAPP logic is programmed. 
7. Once the project is cloned in your local machine, you have to move to AccountAbstraction/DAPP directory.
8. Execute the command `npm i` to install all the required packages (This could take a while)
9. Once the packages are installed, execute the `yarn dev` command to run the application on your local machine.

Now that the application is installed and running, you can play with it. 

1. Connect the wallet: Press the `Sign In` button to connect your wallet to the DAPP. Here you can connect your metamask EOA account (if you go to _app.tsx file in the pages directory, you can add other wallets like coinbase or others. Read the docs of thirdweb for more information ) or continue as a guest. Guest are users who don't have an EOA but want to use our DAPP, so it is possible to create a wallet for them, deploy a smart wallet and make this accessible using a password. Feel free to choose the option which fits your interests. 

2. Once you have your wallet connected to the DAPP, you will need to deploy your smart wallet. How? Well, this depends on the way you are connected to the DAPP.
    - If you are connected with your EOA, go to your thirdweb dashboard and click on the `AccountFactory` contract. Then, in the left panel, you must click `Explorer` and fill out the `CreateAccount` form. This form has two parameters, the `Admin'and the `Data.` Admin is your EOA account, and `data` can be set to 0x. Once the form is filled, you can press the `Execute` button and create your smart wallet. To know your smart wallet address, see the last event in the `Overview` tab. In the `EventData` section, you will see the `account` (the address of your smart wallet) and the `accountAdmin` (your EOA account, which manages the smart wallet).

    - In case you are connected as a guest user, you can launch a transaction (UserOp, actually), and by launching this first transaction, the smart wallet will be created. To know your smart wallet address, see the last event in the `Overview` tab. In the `EventData` section, you will see the `account` (the address of your smart wallet) and the `accountAdmin` (the EOA account that manages the smart wallet).

3. Now, you must send some MATIC (in case you use Polygon or Mumbai) to your smart wallet account or another native token if you use other chains. This step is necessary because you will buy tokens with your smart wallet, and these tokens are not free. 

4. Once the smart wallet has enough funds to buy tokens, you can select and buy the number of tokens you want. Notice that here you just need to sign a transaction. You won't pay gas because the payMaster pays it.

5. Now, you just have to approve the NFT contract to use these tokens.

6. Finally, you can mint the NFT. 

### Optional steps
If you want to use your smart contracts, you must create a thirdweb project for this purpose. You have to execute the `npx thirdweb create contract` command. And once the project is created and the smart contracts are ready to be deployed on the blockchain, you will need to execute the `npx thirdweb deploy` command. After this, a link will be shown in your console. Then, using that link, you will have to add the contracts to your dashboard and modify the constants addresses of this project (constants/addresses.ts).
