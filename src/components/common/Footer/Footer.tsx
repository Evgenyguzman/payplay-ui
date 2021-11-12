import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Flex, FlexCenter } from "../flex";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Flex
      component="footer"
      justifyContent="space-between"
      position="sticky"
      bottom={0}
      borderTop="1px solid #4B3D84"
      p="25px 35px"
      style={{
        background: "linear-gradient(180deg, #1F1D2B 0%, #0B091A 100%)",
      }}
      zIndex={100}
    >
      <Flex alignItems="center" gap="50px">
        <Link to="/about">
          <Typography color="textPrimary">ABOUT US</Typography>
        </Link>
        <Link to="/contacts">
          <Typography color="textPrimary">CONTACTS</Typography>
        </Link>
        <Link to="/help">
          <Typography color="textPrimary">HELP</Typography>
        </Link>
        <Link to="/tos">
          <Typography color="textPrimary">TOS</Typography>
        </Link>
      </Flex>

      <FlexCenter
        width={44}
        height={44}
        borderRadius="50%"
        bgcolor="#6C5ECF"
        p="8px 15px"
      >
        ?
      </FlexCenter>
    </Flex>
  );
};

export default Footer;
