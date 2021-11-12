import { Typography } from "@mui/material";
import Box from "components/common/Box";
import { Flex, FlexColumn } from "components/common/flex";
import React from "react";

interface Props {
  details: any;
}

const Table = ({ details }: Props) => {
  return (
    <Box border="1px solid #FFF" borderRadius="8px">
      <Flex justifyContent="space-between" padding="10px 17px">
        <Typography fontSize="12px">Details</Typography>
        <Typography fontSize="12px">Last 20 matches</Typography>
      </Flex>
      <Flex>
        <FlexColumn
          alignItems="center"
          p="5px 17px"
          border="1px solid #FFF"
          borderLeft="none"
          borderRadius="0px 8px 8px 8px"
        >
          <Typography fontSize="12px">{details.matches}</Typography>
          <Typography fontSize="12px">Matches</Typography>
        </FlexColumn>
        <FlexColumn
          alignItems="center"
          p="5px 17px"
          border="1px solid #FFF"
          borderLeft="none"
          borderRadius="0px 8px 8px 8px"
        >
          <Typography fontSize="12px">{details.winrate}%</Typography>
          <Typography fontSize="12px">Winrate</Typography>
        </FlexColumn>
        <FlexColumn
          alignItems="center"
          p="5px 17px"
          border="1px solid #FFF"
          borderLeft="none"
          borderRadius="0px 8px 8px 8px"
        >
          <Typography fontSize="12px">
            {details.kills}% / {details.hs}%
          </Typography>
          <Typography fontSize="12px">Avg Kills / HS</Typography>
        </FlexColumn>
        <FlexColumn
          alignItems="center"
          p="5px 17px"
          border="1px solid #FFF"
          borderLeft="none"
          borderRadius="0px 8px 8px 8px"
        >
          <Typography fontSize="12px">
            {details.kd} / {details.kr}
          </Typography>
          <Typography fontSize="12px">Avg K/D K/R</Typography>
        </FlexColumn>
      </Flex>
    </Box>
  );
};

export default Table;
