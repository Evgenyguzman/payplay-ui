import { Typography } from "@mui/material";
import Box from "components/common/Box";
import { Flex, FlexColumn } from "components/common/flex";

interface TeamInfoProps {
  username: string;
  elo: string;
  diff: string;
  win: string;
  loss: string;
}

const TeamInfo = ({ username, elo, diff, win, loss }: TeamInfoProps) => {
  return (
    <FlexColumn gap="5px">
      <Typography
        fontWeight="600"
        textAlign="center"
      >{`TEAM_${username.toUpperCase()}`}</Typography>
      <Typography fontSize="11px" color="#ABB2CB" textAlign="center">
        {`AVG. ELO: ${elo} /DIFF ${diff}`}
        <br />
        {`EST. WIN ${win} /EST LOSS ${loss}`}
      </Typography>
    </FlexColumn>
  );
};

const Win = () => (
  <Typography variant="h2" fontWeight="700" color="primary">
    W
  </Typography>
);
const Loss = () => (
  <Typography variant="h2" fontWeight="700" color="#ABB2CB">
    L
  </Typography>
);

export interface StatusProps {
  title: string;
  description: string;
  result?: 0 | 1 | 2;
}

const Status = ({ title, description, result = 0 }: StatusProps) => {
  return (
    <Flex gap="72px" alignItems="center">
      {result === 0 ? (
        <Box width="50px" height="2.5px" bgcolor="#FFF" />
      ) : result === 1 ? (
        <Win />
      ) : (
        <Loss />
      )}
      <FlexColumn gap="9px">
        <Typography variant="h5" fontWeight="700" textAlign="center">
          {title.toUpperCase()}
        </Typography>
        <Typography fontSize="13px" textAlign="center">
          {description.toUpperCase()}
        </Typography>
      </FlexColumn>
      {result === 0 ? (
        <Box width="50px" height="2.5px" bgcolor="#FFF" />
      ) : result === 2 ? (
        <Win />
      ) : (
        <Loss />
      )}
    </Flex>
  );
};

interface Props {
  status: StatusProps;
  teamsInfo: TeamInfoProps[];
}

const Header = ({ status, teamsInfo }: Props) => {
  return (
    <Flex
      justifyContent="center"
      gap="150px"
      py="12px"
      mx="55px"
      borderBottom="1px solid #fff"
    >
      <TeamInfo {...teamsInfo[0]} />
      <Status {...status} />
      <TeamInfo {...teamsInfo[1]} />
    </Flex>
  );
};

export default Header;
