import { Box } from "@mui/system";
import BaseCard from "../../common/Card/Card";
import Title from "../../common/Title/Title";

import image_5v5 from "assets/icons/5v5.svg";
import Button from "components/common/Button";
import { FlexColumn } from "components/common/flex";
import { Typography } from "@mui/material";
import Info from "components/common/Info/Info";

const QueueRect = ({ totalQueue }: { totalQueue: number }) => {
  return (
    <div
      style={{
        height: "100%",
        background: "linear-gradient(180deg, #2F2B47 0%, #1A1829 100%)",
        borderRadius: 15,
        paddingBottom: 13,
      }}
    >
      <div
        style={{
          height: "100%",
          paddingLeft: 18,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
          textAlign: "center",
        }}
      >
        <Info title={totalQueue.toString()} description="in queue" />
      </div>
    </div>
  );
};

interface Props {
  title: string;
  onStart?: () => void;
}

const Card = ({ title, onStart }: Props) => {
  return (
    <div style={{ position: "relative", width: "300px" }}>
      <BaseCard style={{ position: "relative", zIndex: 2 }}>
        <FlexColumn gap="90px" pt="40px" pb="55px">
          <Title bgcolor="white">
            <Typography variant="h1" fontWeight="600">
              {title}
            </Typography>
          </Title>
          <Box paddingX="38px">
            <img src={image_5v5} alt="5v5" />
          </Box>
          <Button
            variant="contained"
            size="large"
            style={{ margin: "0 26px" }}
            onClick={onStart}
          >
            PLAY
          </Button>
        </FlexColumn>
      </BaseCard>
      <div
        style={{
          width: 162,
          position: "absolute",
          top: 0,
          left: -18,
          bottom: -41,
          zIndex: 1,
        }}
      >
        <QueueRect totalQueue={450} />
      </div>
    </div>
  );
};

export default Card;
