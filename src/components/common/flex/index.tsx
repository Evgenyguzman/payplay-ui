import React from "react";
import Box, { BoxProps } from "../Box";

export const Flex: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Box display="flex" ref={ref} {...props} />
));
Flex.displayName = "Flex";

export const FlexFill: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Flex width="100%" ref={ref} {...props} />
));
FlexFill.displayName = "FlexFill";

export const FlexFullFill: React.FC<BoxProps> = React.forwardRef(
  (props, ref) => <FlexFill height="100%" ref={ref} {...props} />
);
FlexFullFill.displayName = "FlexFullFill";

export const FlexColumn: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Flex flexDirection="column" ref={ref} {...props} />
));
FlexColumn.displayName = "FlexColumn";

export const FlexCenter: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Flex alignItems="center" justifyContent="center" ref={ref} {...props} />
));
FlexCenter.displayName = "FlexCenter";
