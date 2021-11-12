import { Typography } from "@mui/material";
import Box from "components/common/Box";
import Button from "components/common/Button";
import { Flex, FlexCenter, FlexColumn } from "components/common/flex";
import Title from "components/common/Title/Title";
import React from "react";

import profile from "assets/icons/user-plus.svg";
import wallet from "assets/icons/wallet.svg";
import { CardWithIcon } from "components/Home/RatingsCard/RatingsCard";

interface Props {}

const Affiliates = (props: Props) => {
  return (
    <Box width="100%" maxWidth="900px" py="64px">
      <Title bgcolor="#FFF">
        <Typography variant="h1">AFFILIATES DASHBOARD</Typography>
      </Title>
      <Flex gap="75px" py="72px">
        <Box>
          <input type="text" />
          <Box>
            <Typography></Typography>
          </Box>
        </Box>
        <Flex gap="40px">
          <FlexCenter
            width="153px"
            height="186px"
            flexDirection="column"
            gap="16px"
            p="9px 11px"
            borderRadius="18px"
            bgcolor="#221F31"
          >
            <img src={profile} alt="Invite Users" />
            <Typography textAlign="center">
              15
              <br />
              INVITED
            </Typography>
          </FlexCenter>
          <FlexCenter
            width="153px"
            height="186px"
            flexDirection="column"
            gap="16px"
            p="9px 11px"
            borderRadius="18px"
            bgcolor="#221F31"
          >
            <img src={wallet} alt="Wallet" />
            <Typography textAlign="center">100 COINS REVENUE</Typography>
          </FlexCenter>
          <FlexColumn
            width="153px"
            height="186px"
            p="9px 11px"
            borderRadius="18px"
            bgcolor="#221F31"
            justifyContent="space-between"
          >
            <Box pt="31px">
              <Typography textAlign="center">125 COINS AVAILABLE</Typography>
            </Box>

            <Button variant="contained" size="small">
              COLLECT
            </Button>
          </FlexColumn>
        </Flex>
      </Flex>
      <Title bgcolor="#FFF">
        <Typography variant="h1">HOW DOES IT WORK?</Typography>
      </Title>
      <Flex gap="59px" py="72px">
        <CardWithIcon
          IconComponent={() => (
            <Typography variant="h5" fontWeight="700" color="primary">
              1
            </Typography>
          )}
        >
          <FlexColumn gap="27px" p="0 10px">
            <Typography variant="h5" fontWeight="600" textAlign="center">
              SET YOUR REFERAL CODE
            </Typography>
            <FlexColumn gap="15px">
              <Typography
                textAlign="center"
                color="textSecondary"
                style={{ textTransform: "uppercase" }}
              >
                Make it unique and easy to remember
              </Typography>
              <Typography
                textAlign="center"
                color="textSecondary"
                style={{ textTransform: "uppercase" }}
              >
                We will also generate an affiliate URL that you can copy and
                share.
              </Typography>
            </FlexColumn>
          </FlexColumn>
        </CardWithIcon>
        <CardWithIcon
          IconComponent={() => (
            <Typography variant="h5" fontWeight="700" color="primary">
              2
            </Typography>
          )}
        >
          <FlexColumn gap="27px" p="0 10px">
            <Typography variant="h5" fontWeight="600" textAlign="center">
              SHARE IT WITH FRIENDS
            </Typography>
            <FlexColumn gap="15px">
              <Typography
                textAlign="center"
                color="textSecondary"
                style={{ textTransform: "uppercase" }}
              >
                Share your code with your friends in order to attract new users
                to PAYPLAY
              </Typography>
              <Typography
                textAlign="center"
                color="textSecondary"
                style={{ textTransform: "uppercase" }}
              >
                Each user you refer will remain your affiliate and will generate
                you revenue.
              </Typography>
            </FlexColumn>
          </FlexColumn>
        </CardWithIcon>
        <CardWithIcon
          IconComponent={() => (
            <Typography variant="h5" fontWeight="700" color="primary">
              3
            </Typography>
          )}
        >
          <FlexColumn gap="27px" p="0 10px">
            <Typography variant="h5" fontWeight="600" textAlign="center">
              COLLECT REWARDS
            </Typography>
            <Box>
              <Typography
                textAlign="center"
                color="textSecondary"
                style={{ textTransform: "uppercase" }}
              >
                You earn a 15 coins for each friend, who completed calibration
              </Typography>
            </Box>
          </FlexColumn>
        </CardWithIcon>
      </Flex>
    </Box>
  );
};

export default Affiliates;
