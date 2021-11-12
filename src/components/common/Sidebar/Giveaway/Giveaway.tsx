import React from "react";

import image from "assets/icons/knifes.svg";
import Title from "components/common/Title/Title";
import Box from "components/common/Box";
import { FlexColumn } from "components/common/flex";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

interface Props {}

const Giveaway = (props: Props) => {
  return (
    <FlexColumn alignItems="center" gap="14px">
      <Box width="100%">
        <Title>
          <Typography variant="h5" fontWeight="700">
            KNIFE GIVEAWAY
          </Typography>
        </Title>
      </Box>

      <Box>
        <img src={image} alt="GIVEAWAY" />
      </Box>

      <Link to="/" target="_blank">
        <Typography variant="h5" fontWeight="700" color="primary">
          JOIN NOW
        </Typography>
      </Link>
    </FlexColumn>
  );
};

export default Giveaway;
