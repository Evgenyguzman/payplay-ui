import React from "react";
import { Flex, FlexColumn } from "../../flex";

import logo from "assets/icons/logo.svg";
import inst from "assets/icons/inst.svg";
import twitter from "assets/icons/twitter.svg";
import vk from "assets/icons/vk.svg";
import discord from "assets/icons/discord.svg";
import { Link } from "react-router-dom";
import Info from "components/common/Info/Info";

interface Props {}

const Header = (props: Props) => {
  return (
    <FlexColumn alignItems="center" gap="28px" pt="17px" pb="28px">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Flex gap="31px" alignItems="center">
        <Flex gap="15px">
          <a href="/" target="_blank">
            <img src={inst} alt="Instagram" />
          </a>
          <a href="/" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="/" target="_blank">
            <img src={vk} alt="VK" />
          </a>
          <a href="/" target="_blank">
            {" "}
            <img src={discord} alt="Discord" />
          </a>
        </Flex>
        <Info title="1896" description="online" />
      </Flex>
    </FlexColumn>
  );
};

export default Header;
