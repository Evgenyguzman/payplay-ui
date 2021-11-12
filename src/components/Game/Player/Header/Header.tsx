import { Flex, FlexCenter } from "components/common/flex";

import crown from "assets/icons/crown.svg";

import vector from "assets/icons/vector.svg";
import { Avatar, Typography } from "@mui/material";

const colors = [
  "#CCC1E3",
  "#CCC1E3",
  "#CCC1E3",
  "#AD90EB",
  "#AD90EB",
  "#AD90EB",
  "#AD90EB",
  "#AD90EB",
  "#5200FF",
  "#5200FF",
];

interface Props {
  title: string;
  imageUrl: string;
  isCaptain: boolean;
  someValue: number;
  level: number;
}

const Header = ({ title, imageUrl, isCaptain, someValue, level }: Props) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb="7px">
      <Flex alignItems="center" gap="11px">
        <Avatar src={imageUrl} alt={title} />
        <Flex alignItems="center" gap="9px">
          <Typography fontWeight="600">{title}</Typography>
          {isCaptain && <img src={crown} alt="Captain" />}
        </Flex>
      </Flex>
      <Flex gap="10px">
        <Flex>
          <Typography>{someValue}</Typography>
          <img src={vector} alt={vector} />
        </Flex>

        <FlexCenter
          width="30px"
          height="30px"
          borderRadius="50%"
          bgcolor={colors[level - 1]}
        >
          <Typography component="span">{level}</Typography>
        </FlexCenter>
      </Flex>
    </Flex>
  );
};

export default Header;
