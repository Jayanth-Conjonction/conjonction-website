import { Box, Container, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import Emoji from "react-emoji-render";
import { Link as Scroll } from "react-scroll";
import Button from "../components/common/form/CustomButton";
import Typography from "../components/common/Typography";
import MailchimpDialog from "../components/MailChimp/MailchimpDialog";
import WaveBorder from "./WaveBorder";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    paddingTop: "8rem",
    paddingBottom: "3rem",
  },
  Banner: {
    backgroundColor: theme.palette.secondary.light,
    position: "relative",
    paddingTop: "8rem",
    paddingBottom: "3rem",
    overflow: "hidden",
  },
  Divider: {
    // width: "3315px",
  },
  Media: {
    // width: "3315px",
    // color: "red",
  },
  waveBorder: {
    backgroundColor: theme.palette.secondary.light,
  },
  FirstRow: {
    position: "flex",
    // maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "1rem",
    width: "100%",
  },
  SecondRow: {
    position: "flex",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "1rem",
  },
  LeftColumn: {},
  RightColumn: { flexGrow: 1, justifyContent: "flew-end" },

  Decorator: {
    position: "absolute",
    display: "block",
    pointer: "none",

    left: 0,
    bottom: 0,
    height: 164,
    width: 164,
    transform: "translate(-120%, -120%)",
  },
  Button: {
    padding: theme.spacing(1, 2),
  },
  [theme.breakpoints.down("sm")]: {
    LeftColumn: {
      alignItems: "center",
      justify: "center",
    },
  },
}));

export default function Banner() {
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
      <Box id="banner" className={classes.Banner}>
        <Container maxWdith="md">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.FirstRow}
            spacing={2}
          >
            <Grid item xs={12} md={12} xl={12}>
              <Typography variant="h1" align="center">
                Investissez, gérez et développez
              </Typography>
              <Typography variant="h1" align="center">
                votre patrimoine
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Typography variant="body1" align="center">
                <Emoji text="La solution digitale pour prendre les bonnes décisions et les mettre en œuvre :dart:" />
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center" spacing={10}>
            <Grid item xs={12} md={12} xl={12}>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                className={classes.Button}
                content="Essayez"
                size="large"
              />
            </Grid>
          </Grid>
          <Scroll
            style={{
              display: "grid",
              alignSelf: "center",
              alignContent: "center",
              position: "relative",
              justifyContent: "center",
            }}
            to="features"
            smooth={true}
          >
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
          <MailchimpDialog open={open} onClose={handleClose} />
        </Container>
      </Box>
      <Box className={classes.Divider}>
        <WaveBorder
          className={classes.waveBorder}
          animationNegativeDelay={2}
          lowerColor="#FFFFFF"
          x={"0"}
          viewBox={"0 0 100 100"}
          d={
            "M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
          }
          //x=48
          //viewBox=0 24 150 28
          //d=M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z
        />
      </Box>
    </>
  );
}
