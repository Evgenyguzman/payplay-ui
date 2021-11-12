import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    fontSize: 18,
    fontStyle: "normal",
    textTransform: "uppercase",
    fontWeight: 600,
    borderWidth: 2,
    whiteSpace: "nowrap",
    '&:focused': {
      backgroundColor: 'inherit'
    }
  },
  contained: {
    // backgroundColor: palette.background.default,
    borderRadius: 12,
    padding: "12px 24px",
  },
  containedPrimary: {
    backgroundColor: palette.primary.main,
    color: "#fff",
    borderRadius: 12,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "&$disabled": {
      color: palette.divider,
      // backgroundColor: palette.text.hint,
    },
  },
  outlinedPrimary: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    color: palette.text.primary,
    "&:hover": {
      borderWidth: 2,
      borderColor: palette.action.focus,
      backgroundColor: "#fff",
    },
  },
  outlinedSecondary: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    color: palette.text.secondary,
    "&:hover": {
      borderWidth: 2,
      borderColor: palette.primary.main,
      backgroundColor: "#fff",
    },
  },
  containedSizeSmall: {
    padding: "9px 20px",
    fontSize: 13,
    lineHeight: '16px'
  },
  containedSizeLarge: {
    padding: "15px 32px",
  },
  outlinedSizeLarge: {
    height: 48,
  },
  outlinedSizeSmall: {
    height: 40,
    padding: "0px 16px",
  },
  textSizeLarge: {
    padding: "15px 32px",
  },
  textSizeSmall: {
    padding: "9px 20px",
  },
  text: {
    borderRadius: 12,
    padding: "12px 24px",
  },
  textPrimary: {
    color: palette.primary.contrastText,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0)",
    "&:hover": {
      backgroundColor: palette.primary.light,
      color: palette.primary.main,
    },
  },
  iconSizeMedium: {
    "&:hover": {
      backgroundColor: palette.primary.light,
    },
  },
  disabled: {}
}));

export default useStyles
