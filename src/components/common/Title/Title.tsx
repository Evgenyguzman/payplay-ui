import React from "react";

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box, { BoxProps } from "../Box";

const useStyles = makeStyles(({ palette }: Theme) => ({
  line: {
    height: 1,
  },
}));

interface Props {
  bgcolor?: BoxProps["bgcolor"];
}

const Title: React.FC<Props> = ({ bgcolor = "#4B3D84", children }) => {
  const { line } = useStyles();
  return (
    <Box
      width="100%"
      display="grid"
      gridTemplateColumns="1fr auto 1fr"
      alignItems="center"
      gap="18px"
      color="#FFF"
    >
      <Box className={line} bgcolor={bgcolor} />
      {children}
      <Box className={line} bgcolor={bgcolor} />
    </Box>
  );
};

export default Title;
