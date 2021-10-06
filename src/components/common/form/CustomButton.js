import { Button, CircularProgress } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const ButtonStyles = withStyles((theme) => ({
  root: {
    borderRadius: 30,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(0.5, 1.5),
    fontSize: theme.typography.pxToRem(12),
    boxShadow: "none",
    "&:active, &:focus": {
      boxShadow: "none",
    },
    fontSize: "14px",
    margin: "10px 0",
    minHeight: "34px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containedPrimary: {
    // color: theme.palette.getContrastText(`#fc4242`),
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.secondary.light, 0.5)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      backgroundColor: "#ffffff",
    },
  },

  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: fade(theme.palette.secondary.light, 0.5),
    },
  },
  sizeSmall: {
    padding: theme.spacing(1, 1),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 2),
    fontSize: theme.typography.pxToRem(16),
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  content: {
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      minWidth: 80,
      padding: theme.spacing(0.5, 0.5),
    },
  },
}));

export default function CustomButton(props) {
  const classes = useStyles();
  const textSyles = props.loading ? classes.content : null;

  return (
    <ButtonStyles {...props}>
      <div className={textSyles}>{props.content}</div>
      {props.loading && (
        <div>
          <CircularProgress color="inherit" size={12} />
        </div>
      )}
    </ButtonStyles>
  );
}
