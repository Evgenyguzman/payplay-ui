import { Typography } from "@mui/material";
import { FlexColumn } from "components/common/flex";
import React from "react";

interface Props {
  time: string;
  description: string;
}

const Countdown = ({ time, description }: Props) => {
  return (
    <FlexColumn alignItems="center" pt="27px" pb="51px">
      <Typography variant="h2" component="span" fontWeight="600">
        {time}
      </Typography>
      <Typography>{description}</Typography>
    </FlexColumn>
  );
};

export default Countdown;
