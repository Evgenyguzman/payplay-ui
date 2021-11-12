import { Typography } from "@mui/material";
import React from "react";
import Box from "../Box";
import { Flex } from "../flex";

interface Props {
  title: string;
  description: string;
}

const Info = ({ title, description }: Props) => {
  return (
    <Flex alignItems="center" gap="6px">
      <Box width="8px" height="8px" borderRadius="50%" bgcolor="#6C5ECF" />
      <Typography fontSize="14px" style={{ textTransform: "uppercase" }}>
        {title}
      </Typography>
      <Typography
        fontSize="12px"
        color="#7D8599"
        style={{ textTransform: "uppercase" }}
      >
        {description}
      </Typography>
    </Flex>
  );
};

export default Info;
