import React from "react";
import { FlexColumn } from "../flex";

interface Props {}

const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <FlexColumn
      component="aside"
      width={367}
      height="100vh"
      borderRight="1px solid #4B3D84"
      position="sticky"
      top={0}
    >
      {children}
    </FlexColumn>
  );
};

export default Sidebar;
