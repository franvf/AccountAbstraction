import { Avatar, Container, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css"; 
import { useRouter } from "next/router";


export default function Navbar() {

    const address = useAddress();
    const disconnect = useDisconnect();
    const router = useRouter();

    return(
        <Container maxW={"1200px"} py={5}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text fontWeight={"bold"}>My application</Text>
                {/* Check if a user is signed in */}
                {!address ? (
                    // If user is not signed in we will show a button to connect the wallet
                    <ConnectWallet
                        className={styles.walletButton}
                        btnTitle="Sign In"
                        theme="light" 
                    />
                ) : (
                    // If user is signed in, we will show an avatar. 
                    //When avatar image is clicked two buttons will be showed up, (1) a link to a profile 
                    // and (2) a sign out button
                    <Menu>
                        <MenuButton>
                            <Avatar size={"sm"} src={`https://avatars.dicebear.com/api/avataaars/${address}.svg`} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={disconnect}>Sign Out</MenuItem>
                        </MenuList>
                    </Menu>
                )}
            </Flex>
        </Container>
    )
}