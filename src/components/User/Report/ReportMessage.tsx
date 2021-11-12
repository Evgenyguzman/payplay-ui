import { TextField, Typography } from "@mui/material";
import Box from "components/common/Box";
import Button from "components/common/Button";
import { FlexColumn } from "components/common/flex";

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    padding: "27px",
    borderRadius: 20,
    backgroundColor: palette.primary.light,
  },
  notchedOutline: {
    border: "1px solid " + palette.primary.main,
  },
  input: {
    color: palette.text.secondary,
  },
}));

interface Props {
  onNext: () => void;
}

const ReportMessage = ({ onNext }: Props) => {
  const classes = useStyles();
  return (
    <FlexColumn gap="25px">
      <Typography variant="h2" fontWeight="600" textAlign="center">
        Report
      </Typography>
      <FlexColumn gap="16px">
        <Typography
          variant="h4"
          fontWeight="500"
          textAlign="center"
          style={{ textTransform: "none" }}
        >
          Could you provide more details?
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ textTransform: "none" }}
        >
          Please include any relevant information on this issue. You can include
          external links to videos and images. If you think we should look at
          something specific on this profile, you can report that exact content
          (like a post).
        </Typography>
      </FlexColumn>

      <TextField
        variant="outlined"
        multiline
        rows={4}
        placeholder="Please, indicate"
        InputProps={{
          classes,
        }}
      />
      <Box m="auto">
        <Button variant="contained" size="large" onClick={onNext}>
          Continue
        </Button>
      </Box>
    </FlexColumn>
  );
};

export default ReportMessage;
