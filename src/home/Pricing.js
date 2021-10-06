import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CardSub from "../components/common/general/CardSub";
import Typography from "../components/common/Typography";
import MailchimpDialog from "../components/MailChimp/MailchimpDialog";
import WaveBorder from "./WaveBorder";

const useStyles = makeStyles((theme) => ({
  Banner: {
    backgroundColor: theme.palette.secondary.light,
    position: "relative",
    marginTop: 7,
    marginBottom: 7,
  },
  waveBorderTop: {
    backgroundColor: theme.palette.secondary.light,
    transform: "rotate(-180deg)",
    width: "100%",
  },
  waveBorderBottom: {
    backgroundColor: theme.palette.secondary.light,
  },
  TwoColumn: {
    position: "flex",
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  LeftColumn: { marginLeft: 0, marginRight: 0 },
  RightColumn: { flexGrow: 1, justifyContent: "flew-end" },
  [theme.breakpoints.down("sm")]: {
    LeftColumn: {
      alignItems: "center",
      justify: "center",
      // display: "block",
    },
    Typography: { textAlign: "center" },
    Decorator: {
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 1,
      transform: "translate(-45%,90%)",
    },
    Illustration: {
      paddingBottom: "3rem",
    },
  },
}));

export default function CustomizedSlider({ isAuthenticated }) {
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
      <Box>
        <WaveBorder
          className={classes.waveBorderTop}
          animationNegativeDelay={2}
          lowerColor="#FFFFFF"
          x={"0"}
          viewBox={"0 0 100 100"}
          d={
            "M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
          }
        />
      </Box>
      <Box id="pricing" className={classes.Banner}>
        <Container maxWidth="md">
          {/* <Collapse in={checked} {...(checked ? { timeout: 500 } : {})}> */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            // className={classes.TwoColumn}
            spacing={4}
          >
            <Grid item xs>
              <Typography variant="h4" align="center">
                Un modèle flexible
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                variant="body1"
                className={classes.Typography}
                color="textSecondary"
                align="center"
              >
                Notre offre est sans engagement
              </Typography>
              <Typography
                variant="body1"
                className={classes.Typography}
                color="textSecondary"
                align="center"
              >
                … à part pour nous
              </Typography>
            </Grid>
            <Grid item lg sm={12}>
              <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
                // className={classes.LeftColumn}
              >
                <Grid item xs={6} md={6}>
                  <CardSub
                    header={"Gestion"}
                    price={
                      <>
                        8€ <span style={{ fontSize: 12 }}>(HT)</span>
                      </>
                    }
                    model="par lot géré"
                    frequency={"Dégressif"}
                    button="off"
                    special="Sans engagement"
                    onClick={handleClickOpen}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <CardSub
                    header={"Investissement"}
                    price={
                      <>
                        <div>Nous</div>
                        <div>Contacter</div>
                      </>
                    }
                    button="off"
                    model=" "
                    frequency={" "}
                    button="off"
                    special=" "
                    onClick={handleClickOpen}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <MailchimpDialog open={open} onClose={handleClose} />
        </Container>
      </Box>
      <Box className={classes.Divider}>
        <WaveBorder
          className={classes.waveBorderBottom}
          animationNegativeDelay={2}
          lowerColor="#FFFFFF"
          x={"90"}
          viewBox={"0 24 150 28"}
          d={
            "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          }
        />
      </Box>
    </>
  );
}
