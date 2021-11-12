import { Flex } from "components/common/flex";
import React, { useCallback } from "react";

import close from "assets/icons/close.svg";
import Box from "components/common/Box";
import { Typography } from "@mui/material";

interface Props {
  active?: boolean;
  opacity?: number;
  title: string;
  imageUrl: string;
  onChoose?: () => void;
}

const Card = ({ active, opacity, title, imageUrl, onChoose }: Props) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap="15px"
      p="3px"
      pl="12px"
      bgcolor="#221F31"
      borderRadius="9px"
      style={{
        opacity: opacity ? opacity : active ? 1 : ".3",
      }}
    >
      <img
        src={close}
        alt="Close"
        style={{
          cursor: "pointer",
          visibility: active ? "visible" : "hidden",
        }}
        onClick={onChoose}
      />
      <Typography margin="5px" fontWeight="400">
        {title}
      </Typography>
      <Box borderRadius="5px" overflow="hidden">
        <img src={imageUrl} alt={title} style={{ display: "block" }} />
      </Box>
    </Flex>
  );
};

export default Card;
