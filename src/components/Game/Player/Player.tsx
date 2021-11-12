import Box from "components/common/Box";
import React from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";

interface Props {
  data: any;
}

const Player = ({ data }: Props) => {
  return (
    <Box bgcolor="#221F31" borderRadius="15px" p="10px">
      <Header {...data} title={data.username} imageUrl={data.avatarUrl} />
      <Table {...data} />
    </Box>
  );
};

export default Player;
