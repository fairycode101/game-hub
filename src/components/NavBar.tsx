import { HStack, Image, Text } from "@chakra-ui/react";
import login from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={login} boxSize={"60px"} />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
