import Countdown from "../Countdown/Countdown";
import Card from "../Voting/Card/Card";

import { Flex, FlexColumn } from "components/common/flex";
import { maps } from "../Voting/Voting";
import Button from "components/common/Button";
import { Typography } from "@mui/material";

import copy from "assets/icons/copy.svg";
import { useCallback, useState } from "react";

const CopyButton = ({ value }: { value: string }) => {
  const [success, setSuccess] = useState(false);

  const handleButton = useCallback(() => {
    navigator.clipboard.writeText(value).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }, [value]);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="14px 24px"
      borderRadius="12px"
      border="1px solid #ABB2CB"
      borderColor={success ? "green" : "#ABB2CB"}
      style={{ cursor: "pointer" }}
      onClick={handleButton}
    >
      <Typography color="#ABB2CB" style={{ textTransform: "uppercase" }}>
        Hidden
      </Typography>

      <img src={copy} alt="Copy" />
    </Flex>
  );
};

interface Props {}

const GameStarted = (props: Props) => {
  return (
    <div>
      <Countdown time="04:12" description="Waiting for players" />
      <FlexColumn gap="16px">
        <Card
          key={maps[0].id}
          title={maps[0].title}
          imageUrl={maps[0].imageUrl}
          active={false}
          opacity={1}
        />
        <Button variant="contained" color="primary">
          GO TO SERVER
        </Button>
        <Typography textAlign="center">
          In case of FPS drops open console and type:
        </Typography>
        <CopyButton value="https://some-link" />
      </FlexColumn>
    </div>
  );
};

export default GameStarted;
