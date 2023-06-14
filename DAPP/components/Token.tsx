import { useState } from "react";
import { useContract, Web3Button, useAddress, useContractWrite} from "@thirdweb-dev/react";
import { TOKEN_ADDRESS, NFT_ADDRESS } from "../constants/addresses";
import { ethers } from "ethers";
import { Container, Input } from "@chakra-ui/react";

export default function Token() {

  const tokenContractAddress = TOKEN_ADDRESS;
  const nftContractAddress = NFT_ADDRESS;
  const walletAddress = useAddress();

  const [tokenAmount, setTokenAmount] = useState("");
  const [approvalAmount, setApprovalAmount] = useState("");
  const [tokenId, setTokenId] = useState("");
  
  return (
    <div>
      {walletAddress ? (
        <Container>

          <h1> Amount: </h1>
          <Input
            placeholder={"Tokens to buy"}
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}>
          </Input>

          <Web3Button
            contractAddress={tokenContractAddress}
            action={(contract) => {contract.call(
              "buyTokens", 
              [tokenAmount], 
              {value: ethers.utils.parseEther((parseFloat(tokenAmount)*0.01).toString())}
              )}
            }
          >
            Buy Token
          </Web3Button>

          <br />
          <br />

          <h1> Tokens to approve: </h1>
          <Input
            placeholder={"Tokens to approve"}
            value={approvalAmount}
            onChange={(e) => setApprovalAmount(e.target.value)}>
          </Input>

          <Web3Button
            contractAddress={tokenContractAddress}
            action={(contract) => {contract.call("approve", [NFT_ADDRESS, ethers.utils.parseEther(approvalAmount)])}}
          >
            Approve
          </Web3Button>

          <br />
          <br />
          
          <h1> TokenID: </h1>
          <Input
            placeholder={"TokeniD"}
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}>
          </Input>

          <Web3Button
            contractAddress={nftContractAddress}
            action={(contract) => {contract.call("mint", [tokenId])}}
          >
            Buy NFT
          </Web3Button>
        </Container>

      ) : (
        <a> Connect your wallet </a>
      )}
    </div>
  );
}
