import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, smartWallet, walletConnect } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { API_KEY, FACTORY_ADDRESS } from "../constants/addresses";
import Navbar from "../components/Navbar";
import Token from "../components/Token";

const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: FACTORY_ADDRESS,
          thirdwebApiKey: API_KEY,
          gasless: true,
          personalWallets: [ //EOA wallets
            metamaskWallet(),
            // coinbaseWallet(),
            // walletConnect(),
            localWallet()
          ]
        })
      ]}  
    >
      <ChakraProvider>
        <Navbar /> {/* Show navbar component*/}
        <Token />
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
