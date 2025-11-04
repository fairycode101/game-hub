import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (value: string) => void;
  selectSortOrder: string | null;
}
function SortSelector({ onSelectSortOrder, selectSortOrder }: Props) {
  const sortOptions = [
    {
      value: "",
      lable: "Relevabce",
    },
    {
      value: "-added",
      lable: "Date added",
    },
    {
      value: "name",
      lable: "Name",
    },
    {
      value: "-released",
      lable: "Release dare",
    },
    {
      value: "-metacritic",
      lable: "Popularity",
    },
    {
      value: "-rating",
      lable: "Average rating",
    },
  ];
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {
            sortOptions.filter((option) => option.value === selectSortOrder)[0]
              ?.lable || "Relevabce" /* TODO: fix this */
          }
        </MenuButton>
        <MenuList>
          {sortOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={() => onSelectSortOrder(option.value)}
            >
              {option.lable}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default SortSelector;
