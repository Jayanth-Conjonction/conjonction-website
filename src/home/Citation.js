import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "../components/common/Typography";
import WaveBorder from "./WaveBorder";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    // paddingTop: "8rem",
    // paddingBottom: "3rem",
  },
  Banner: {
    backgroundColor: theme.palette.secondary.light,
    position: "relative",
    marginTop: 7,
    marginBottom: 7,
  },
  Divider: {
    // width: "3315px",
  },
  Media: {
    // width: "3315px",
    // color: "red",
  },
  waveBorderTop: {
    backgroundColor: theme.palette.secondary.light,
    transform: "rotate(-180deg)",
  },
  waveBorderBottom: {
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

export default function Citation() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.Divider}>
        <WaveBorder
          className={classes.waveBorderTop}
          animationNegativeDelay={1}
          lowerColor="#FFFFFF"
          x={"120"}
          viewBox={"50 24 150 28"}
          d={
            "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          }
        />
      </Box>
      <Box id="banner" className={classes.Banner}>
        <Container maxWidth="md">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.FirstRow}
            spacing={4}
          >
            <Grid item xs={12} md={12} xl={12}>
              <Typography
                variant="h2"
                style={{ fontSize: "30px" }}
                align="center"
              >
                Ce qui est encore plus important que la constitution d’un
                patrimoine, c’est de le faire d’une manière qui vous apportera
                la tranquilité d’esprit
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Typography variant="h5" align="center">
                - Tony Robbins
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={classes.Divider}>
        <WaveBorder
          className={classes.waveBorderBottom}
          animationNegativeDelay={2}
          lowerColor="#FFFFFF"
          x={"70"}
          viewBox={"0 24 150 28"}
          d={
            "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          }
        />
      </Box>
    </>
  );
}
