import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCard() {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCard;
