import { Typography } from "@mui/material";
import Box from "components/common/Box";
import Button from "components/common/Button";
import { FlexColumn } from "components/common/flex";
import React from "react";

interface Props {
  onNext: () => void;
}

const ReportConfirmation = ({ onNext }: Props) => {
  return (
    <FlexColumn gap="43px">
      <Typography variant="h2" fontWeight="600">
        Thanks for contacting us
      </Typography>
      <Box m="auto">
        <Button variant="contained" size="large" onClick={onNext}>
          OK
        </Button>
      </Box>
    </FlexColumn>
  );
};

export default ReportConfirmation;
