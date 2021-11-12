import Card from "../Voting/Card/Card";

import { FlexColumn } from "components/common/flex";
import { maps } from "../Voting/Voting";
import Button from "components/common/Button";

interface Props {}

const GameFinished = (props: Props) => {
  return (
    <FlexColumn gap="36px" mt="100px">
      <Card
        key={maps[0].id}
        title={maps[0].title}
        imageUrl={maps[0].imageUrl}
        active={false}
        opacity={1}
      />
      <FlexColumn gap="8px">
        <Button variant="contained">WATCH DEMO</Button>
        <Button variant="contained" color="info">
          BACK TO HOME
        </Button>
      </FlexColumn>
    </FlexColumn>
  );
};

export default GameFinished;
