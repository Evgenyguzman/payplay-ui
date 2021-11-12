import Box from "components/common/Box";
import { Flex, FlexColumn } from "components/common/flex";
import { players } from "data/players";
import React, { useState } from "react";
import { Link as MuiLink, LinkProps } from "react-router-dom";

import steam from "assets/icons/steam.svg";
import faceit from "assets/icons/faceit.svg";
import { Typography } from "@mui/material";
import Report from "../Report/Report";
import Dialog from "components/common/Dialog/Dialog";
import Button from "components/common/Button";

const Link = <S extends unknown = unknown>(
  props: LinkProps<S> & React.RefAttributes<HTMLAnchorElement>
) => {
  return (
    <MuiLink
      style={{
        width: 188,
        height: 48,
        backgroundColor: "#6C5ECF",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
      {...props}
    />
  );
};

const Avatar = ({ imageUrl }: any) => {
  return (
    <Box
      width="162px"
      height="162px"
      borderRadius="50%"
      overflow="hidden"
      border="14px solid transparent"
    >
      <img src={imageUrl} alt="Avatar" style={{ height: "100%" }} />
    </Box>
  );
};

// ProgressRing
// https://css-tricks.com/building-progress-ring-quickly/
// толщина 7px

const Profile = () => (
  <Link to="/user/statistics">
    <Typography variant="h6" color="textPrimary">
      Profile
    </Typography>
  </Link>
);

const Friends = () => (
  <Link to="/user/friends">
    <Typography variant="h6" color="textPrimary">
      Friends
    </Typography>
  </Link>
);

const Affiliates = () => (
  <Link to="/user/affiliates">
    <Typography variant="h6" color="textPrimary">
      Affiliates
    </Typography>
  </Link>
);

const Transactions = () => (
  <Link to="/user/transactions">
    <Typography variant="h6" color="textPrimary">
      Transactions
    </Typography>
  </Link>
);

interface Props {
  id?: string;
}

const Header = ({ id }: Props) => {
  // const {params} = useRouteMatch<{
  //   id?: string
  // }>()

  const user = players[0];

  const [open, setOpen] = useState(false);

  return (
    <>
      <Box mt="49px">
        <Typography
          variant="h1"
          fontWeight="bold"
        >{`${user.username} profile`}</Typography>
      </Box>
      <Flex alignItems="center" gap="36px">
        <FlexColumn>
          <Box width="100%" height="2px" bgcolor="#FFF" borderRadius="1px" />
          <Flex gap="37px" p="37px 17px">
            <Profile />
            {id ? (
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Typography variant="h6" color="textPrimary">
                  Add as friend
                </Typography>
              </Link>
            ) : (
              <Friends />
            )}
          </Flex>
          <Box width="100%" height="2px" bgcolor="#FFF" borderRadius="1px" />
        </FlexColumn>
        <Box position="relative">
          <Avatar imageUrl={user.avatarUrl} />

          <Box position="absolute" left="0" bottom="0">
            <MuiLink to="/" target="_blank">
              <img src={faceit} alt="Faceit" />
            </MuiLink>
          </Box>
          <Box position="absolute" right="0" bottom="0">
            <MuiLink to="/" target="_blank">
              <img src={steam} alt="Steam" />
            </MuiLink>
          </Box>
        </Box>
        <FlexColumn>
          <Box width="100%" height="2px" bgcolor="#FFF" borderRadius="1px" />
          <Flex gap="37px" p="37px 17px">
            {!id && <Affiliates />}
            {!id && <Transactions />}
            {id && <Friends />}
            {id && (
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                <Typography variant="h6" color="textPrimary">
                  Report
                </Typography>
              </Link>
            )}
          </Flex>
          <Box width="100%" height="2px" bgcolor="#FFF" borderRadius="1px" />
        </FlexColumn>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Report username="Nickname" onClose={() => setOpen(false)} />
        </Dialog>
      </Flex>
    </>
  );
};

export default Header;
