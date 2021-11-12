import { Avatar, TextField, Typography } from "@mui/material";
import Box from "components/common/Box";
import { Flex } from "components/common/flex";
import { players } from "data/players";
import React from "react";

import search from "assets/icons/search.svg";

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    width: 363,
    padding: "6px 15px",
    borderRadius: 15,
    backgroundColor: palette.info.main,
  },
  outlined: {
    backgroundColor: palette.info.main,
  },
  input: {
    color: palette.text.secondary,
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      color="primary"
      placeholder="Type Nickname..."
      InputProps={{ classes, endAdornment: <img src={search} alt="Search" /> }}
    />
  );
};

interface Props {}

const Friends = (props: Props) => {
  return (
    <Box p="48px">
      <Box pt="20px">
        <Search />
      </Box>
      <Box pt="43px">
        <Typography variant="h4" fontWeight="500">
          Active
        </Typography>
        <Flex flexWrap="wrap" gap="20px 75px" maxWidth="1130px" pt="19px">
          {players.map((player) => (
            <Flex
              key={player.id}
              width="226px"
              p="9px 13px"
              borderRadius="15px"
              bgcolor="#221F31"
              alignItems="center"
              gap="21px"
            >
              <Box position="relative">
                <Avatar src={player.avatarUrl} alt={player.username} />
                <Box
                  width="10px"
                  height="10px"
                  position="absolute"
                  right="0"
                  bottom="0"
                  bgcolor="#329E57"
                  borderRadius="50%"
                />
              </Box>

              <Typography>{player.username}</Typography>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box pt="43px">
        <Typography variant="h4" fontWeight="500">
          Inactive
        </Typography>
        <Flex flexWrap="wrap" gap="20px 75px" maxWidth="1130px" pt="19px">
          {players.map((player) => (
            <Flex
              key={player.id}
              width="226px"
              p="9px 13px"
              borderRadius="15px"
              bgcolor="#221F31"
              alignItems="center"
              gap="21px"
            >
              <Box position="relative">
                <Avatar src={player.avatarUrl} alt={player.username} />
              </Box>
              <Typography>{player.username}</Typography>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Friends;
