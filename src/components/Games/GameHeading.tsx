import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
interface Props {
  GameQuery: GameQuery;
}

function GameHeading({ GameQuery }: Props) {
  const header = `${GameQuery.platform?.name || ""} ${
    GameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"4xl"}>
      {header}
    </Heading>
  );
}

export default GameHeading;
