import MuiBox, { BoxProps as MuiBoxProps } from "@mui/material/Box";
import React from "react";

export interface BoxProps extends MuiBoxProps {}

const Box: React.FC<BoxProps> = React.forwardRef(({ ...props }, ref) => {
  return <MuiBox {...props} ref={ref} />;
});
Box.displayName = "Box";

export default Box;
