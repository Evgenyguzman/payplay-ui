import { Flex, FlexCenter, FlexColumn } from "components/common/flex";
import Title from "components/common/Title/Title";
import { players } from "../data/players";
import { rewards } from "data/rewards";
import { Typography } from "@mui/material";
import Slider from "components/Home/Slider/Slider";
import { useHistory } from "react-router-dom";
import RatingsCard from "components/Home/RatingsCard/RatingsCard";

interface Props {}

const Home = (props: Props) => {
  const history = useHistory();
  const handleStartGame = () => {
    history.push("/game");
  };

  return (
    <div>
      <FlexCenter pt="43px" pb="100px">
        {/* <Card title="COMPETITIVE" /> */}
        <Slider onStart={handleStartGame} />
      </FlexCenter>

      <FlexColumn
        m="auto"
        gap="50px"
        alignItems="center"
        pb="43px"
        maxWidth="918px"
      >
        <Title bgcolor="#FFF">
          <Typography variant="h1">RATINGS</Typography>
        </Title>
        <Flex gap="85px">
          <RatingsCard title="Top KD" players={players} rewards={rewards} />
          <RatingsCard title="Kill Rate" players={players} rewards={rewards} />
          <RatingsCard title="Winstreak" players={players} rewards={rewards} />
        </Flex>
      </FlexColumn>
    </div>
  );
};

export default Home;
