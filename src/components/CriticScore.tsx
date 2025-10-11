import { Badge } from "@chakra-ui/react";
interface Props {
  metacritic: number;
}
function CriticScore({ metacritic }: Props) {
  const color =
    metacritic >= 80 ? "green" : metacritic >= 60 ? "yellow" : "red";
  return (
    <Badge borderRadius={"4px"} colorScheme={color}>
      {metacritic}
    </Badge>
  );
}

export default CriticScore;
