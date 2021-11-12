import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Box from "components/common/Box";
import Button from "components/common/Button";
import { Flex, FlexColumn } from "components/common/flex";

import info from "assets/icons/info-circle.svg";

interface Props {
  username: string;
  onNext: () => void;
}

const ReportReason = ({ username, onNext }: Props) => {
  return (
    <FlexColumn gap="25px">
      <Typography variant="h2" fontWeight="600" textAlign="center">
        Report
      </Typography>
      <FlexColumn gap="30px">
        <Typography
          variant="h4"
          fontWeight="500"
          textAlign="center"
          style={{ textTransform: "none" }}
        >
          What do you like to report {username} for?
        </Typography>
        <RadioGroup aria-label="Reason" name="reason">
          <FormControlLabel
            value="bullying"
            control={<Radio />}
            label="Harassment or Bullying"
          />
          <FormControlLabel
            value="smurfing"
            control={<Radio />}
            label="Mulltiple Accounts or Smurfing"
          />
          <FormControlLabel
            value="content"
            control={<Radio />}
            label="Inappropriate Content"
          />
          <FormControlLabel
            value="cheating"
            control={<Radio />}
            label="Cheating"
          />
          <FormControlLabel
            value="else"
            control={<Radio />}
            label="Something else"
          />
        </RadioGroup>
      </FlexColumn>

      <Box p="17px 19px" bgcolor="#383164" borderRadius="15px">
        <Flex gap="8px" alignItems="center">
          <img src={info} alt="Info" />
          <Typography>
            Abusive behavior in matches should be reported via the matchroom.
          </Typography>
        </Flex>
      </Box>
      <Box m="auto">
        <Button variant="contained" size="large" onClick={onNext}>
          Continue
        </Button>
      </Box>
    </FlexColumn>
  );
};

export default ReportReason;
