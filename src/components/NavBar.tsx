import { HStack, Image, Text } from "@chakra-ui/react";
import login from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SelectInput from "./SelectInput";

function NavBar() {
  return (
    <HStack padding={"10px"}>
      <Image src={login} boxSize={"60px"} />
      <SelectInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
