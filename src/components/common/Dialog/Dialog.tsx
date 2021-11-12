import React from "react";

import MuiDialog from "@mui/material/Dialog";
import { FlexColumn } from "../flex";

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette }: Theme) => ({
  paper: {
    maxWidth: 900,
    backgroundColor: palette.primary.dark,
    borderRadius: 30,
    padding: "48px 70px",
  },
}));

interface Props {
  open: boolean;
  onClose: any;
}

const Dialog: React.FC<Props> = ({ open, onClose, children }) => {
  const { paper } = useStyles();
  return (
    <MuiDialog open={open} onClose={onClose} classes={{ paper }}>
      <FlexColumn alignItems="center">{children}</FlexColumn>
    </MuiDialog>
  );
};

export default Dialog;
