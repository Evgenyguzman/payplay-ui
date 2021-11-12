import Box from "components/common/Box";
import { Flex, FlexColumn } from "components/common/flex";

import champion from "assets/icons/champion.svg";

import React from "react";

import { Avatar, Typography } from "@mui/material";

export const CardWithIcon = ({ children, IconComponent }: any) => {
  return (
    <Box position="relative" width={227}>
      <Box
        position="absolute"
        top={-25}
        left="calc(50% - 25px)"
        width={50}
        height={50}
        zIndex={1}
        bgcolor="#fff"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <IconComponent />
      </Box>
      <Box
        height="100%"
        borderRadius="12px"
        pt="41px"
        pl="14px"
        pr="14px"
        pb="21px"
        style={{
          background: "rgba(62, 52, 120, 0.5)",
          // backdropFilter: "blur(50px)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const RatingsCard = ({ title, players, rewards }: any) => {
  return (
    <CardWithIcon IconComponent={() => <img src={champion} alt="Champion" />}>
      <Typography variant="h4" fontWeight="600" textAlign="center">
        {title}
      </Typography>

      <Box height="2px" bgcolor="#FFF" ml="19px" my="16px" />

      {players.map((player: any, index: number) => (
        <React.Fragment key={player.id}>
          <Flex
            alignItems="center"
            style={{
              opacity: index <= 2 ? 1 : 0.4,
              paddingBottom: index === 1 ? 14 : index === 3 ? 9 : 0,
            }}
          >
            <Box width="19px">
              {index <= 2 && (
                <Typography fontSize={index === 0 ? 18 : 13} fontWeight="600">
                  {index + 1}
                </Typography>
              )}
            </Box>

            <Flex alignItems="center" gap="7px">
              <Avatar
                src={player.avatarUrl}
                alt="Avatar"
                variant="circular"
                style={{
                  width: index === 0 ? 42 : index <= 2 ? 30 : 26,
                  height: index === 0 ? 42 : index <= 2 ? 30 : 26,
                }}
              />
              <FlexColumn>
                <Typography fontSize={index === 0 ? 14 : 10}>
                  {player.username}
                </Typography>
                {rewards[index] && (
                  <Typography fontSize={index === 0 ? 14 : 10} fontWeight="400">
                    {`Reward: `}
                    <Typography
                      component="span"
                      fontSize={index === 0 ? 14 : 10}
                      fontWeight="400"
                      color="#FFCE79"
                    >{`${rewards[index]} coins`}</Typography>
                  </Typography>
                )}
              </FlexColumn>
            </Flex>
          </Flex>
          {(index === 0 || index === 2) && (
            <Box height="2px" bgcolor="#FFF" ml="19px" my="16px" />
          )}
        </React.Fragment>
      ))}
    </CardWithIcon>
  );
};

export default RatingsCard;
