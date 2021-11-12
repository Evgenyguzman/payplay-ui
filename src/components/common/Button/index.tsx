import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import useStyles from "./style";

export type ButtonProps<C extends React.ElementType = "button"> =
  MuiButtonProps<C, { component?: C }> & {
    // здесь можем добавить кастомные пропсы
  };

const Button = <C extends React.ElementType>(props: ButtonProps<C>) => {
  const classes = useStyles();
  return (
    <MuiButton {...props} classes={{ ...classes, ...props.classes }}>
      {props.children}
    </MuiButton>
  );
};
Button.displayName = "Button";
export default Button;
