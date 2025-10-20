import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  setSelectPlatform: (platform: Platform) => void;
  selectPlatform?: Platform | null;
}
function PlatformSelector({ setSelectPlatform, selectPlatform }: Props) {
  const { data } = usePlatforms();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
