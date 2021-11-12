import { Avatar, Popover, Typography } from "@mui/material";
import React from "react";
import Box from "../Box";
import { Flex, FlexCenter, FlexColumn } from "../flex";

import user from "assets/images/user-avatar.png";

import profile from "assets/icons/profile.svg";
import addUser from "assets/icons/add_user.svg";
import kick from "assets/icons/close-square.svg";
import logout from "assets/icons/logout.svg";
import users from "assets/icons/users.svg";
import notification from "assets/icons/notification.svg";
import buy from "assets/icons/buy.svg";
import coin from "assets/icons/coin.svg";
import plus from "assets/icons/plus.svg";
import arrowDown from "assets/icons/arrow-down.svg";

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles(({ palette }: Theme) => ({
  paper: {
    width: 186,
    marginTop: 20,
    padding: "15px 19px",
    background: "linear-gradient(180deg, #272245 0%, #3B3081 100%)",
    borderRadius: 13,
  },
}));

type Model = "user" | "users" | "notifications" | "cart" | "payment" | "me";

interface Props {}

const Header: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [model, setModel] = React.useState<Model>();

  const handleClick = (event: any, model: Model) => {
    setAnchorEl(event.currentTarget);
    setModel(model);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Flex
      component="header"
      position="sticky"
      top={0}
      borderBottom="1px solid #4B3D84"
      padding="11px 22px"
      zIndex={100}
      style={{
        background: "linear-gradient(180deg, #1F1D2B 0%, #0B091A 100%)",
      }}
    >
      {/* {children} */}
      <Flex width="100%" justifyContent="space-between" alignItems="stretch">
        <Box />
        <Flex gap="24px" alignItems="center">
          <Flex gap="8px">
            {[1, 2, 3].map((friend) => (
              <FlexCenter key={friend} onClick={(e) => handleClick(e, "user")}>
                <Avatar
                  src={user}
                  variant="circular"
                  style={{ width: 34, height: 34, cursor: "pointer" }}
                />
              </FlexCenter>
            ))}
          </Flex>
          <FlexCenter
            onClick={(e) => handleClick(e, "users")}
            style={{ cursor: "pointer" }}
          >
            <img src={users} alt="Users connection" />
          </FlexCenter>
          <FlexCenter
            onClick={(e) => handleClick(e, "notifications")}
            style={{ cursor: "pointer" }}
          >
            <img src={notification} alt="Notification" />
          </FlexCenter>
          <FlexCenter
            onClick={(e) => history.push("/store")}
            style={{ cursor: "pointer" }}
          >
            <img src={buy} alt="Basket" />
          </FlexCenter>
          <Flex alignItems="center" gap="8px">
            <img src={coin} alt="Coin" />
            <Typography color="#FFCE79" fontWeight="600">
              586
            </Typography>
            <FlexCenter
              height="100%"
              onClick={(e) => handleClick(e, "payment")}
            >
              <img src={plus} alt="Plus" style={{ cursor: "pointer" }} />
            </FlexCenter>
          </Flex>
          <Flex
            gap="7px"
            onClick={(e) => handleClick(e, "me")}
            style={{ cursor: "pointer" }}
          >
            <Avatar
              src={user}
              variant="circular"
              style={{ width: 54, height: 54 }}
            />
            <img src={arrowDown} alt="Arrow" />
          </Flex>
        </Flex>
      </Flex>
      <Popover
        id={id}
        classes={classes}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {model === "user" && (
          <FlexColumn gap="7px">
            <Flex gap="12px">
              <img src={profile} alt="profile" />
              <Typography>Visit profile</Typography>
            </Flex>
            <Flex gap="12px">
              <img src={addUser} alt="add" />
              <Typography>Add friend</Typography>
            </Flex>
            <Box height="1px" bgcolor="#fff" />
            <Flex gap="12px">
              <img src={kick} alt="Kick" />
              <Typography>Kick</Typography>
            </Flex>
          </FlexColumn>
        )}
        {model === "users" && <></>}
        {model === "notifications" && <></>}
        {model === "cart" && <></>}
        {model === "payment" && <></>}
        {model === "me" && (
          <FlexColumn gap="7px">
            <Flex gap="12px">
              <img src={profile} alt="profile" />
              <Typography>Go to profile</Typography>
            </Flex>
            <Box height="1px" bgcolor="#fff" />
            <Flex gap="12px">
              <img src={logout} alt="Logout" />
              <Typography>Logout</Typography>
            </Flex>
          </FlexColumn>
        )}
      </Popover>
    </Flex>
  );
};

export default Header;
