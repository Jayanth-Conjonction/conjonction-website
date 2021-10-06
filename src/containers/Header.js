import { CardMedia, Grid } from "@material-ui/core/";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import Button from "../components/common/form/CustomButton";
import withRoot from "../components/design/withRoot";
import MailchimpDialog from "../components/MailChimp/MailchimpDialog";
import Logo from "../static/images/conjonction.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 150,
    height: 50,
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  appBar: {
    display: "flex",
    maxWidth: "1280px",
    height: "65px",
    marginLeft: "auto",
    marginRight: "auto",
    background: "rgba(0, 0, 0, 0)",
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  sectioNav: {
    display: "flex",
  },
  link: {
    margin: theme.spacing(3, 2.5),
    textDecoration: "none",
  },
  Button: {
    padding: theme.spacing(0, 1),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  heroContent: {
    backgroundColor: "#F9FAFB",
    overflow: "hidden",
  },
  title: {
    flexGrow: 1,
    transform: "translateX(3%)",
  },
  ButtonGrid: {
    display: "flex",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    Button: {
      minWidth: 100,
      padding: theme.spacing(0.5, 0.5),
      fontSize: 10,
    },
    ButtonGrid: {
      display: "flex",
      textAlign: "center",
    },
  },
}));

// function getOffset(el) {
//   const rect = el.getBoundingClientRect();
//   return {
//     left: rect.left + window.scrollX,
//     top: rect.top + window.scrollY,
//   };
// }

export function Header(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.grow}>
        <AppBar
          position="static"
          color="inherit"
          elevation={0}
          className={classes.appBar}
          id="header"
        >
          <Toolbar>
            <CardMedia component="img" image={Logo} className={classes.icon} />

            <div className={classes.grow} />
            <div className={classes.sectioNav}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignContent="center"
                className={classes.ButtonGrid}
                spacing={2}
              >
                <Grid item xs sm={5}>
                  <Button
                    onClick={handleClickOpen}
                    color="primary"
                    variant="outlined"
                    className={classes.Button}
                    content="S'inscrire"
                  />
                </Grid>
                <Grid item xs sm={7}>
                  <Button
                    href="https://app.conjonction.com/"
                    color="primary"
                    variant="contained"
                    className={classes.Button}
                    content="Se connecter"
                    // styles={classes.Button}
                  />
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
        <MailchimpDialog open={open} onClose={handleClose} />
      </div>
      <div> {props.children}</div>
    </>
  );
}

export default withRoot(Header);
