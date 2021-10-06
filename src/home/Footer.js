import { Container, Grid, IconButton, Link } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "../components/common/Typography";
import instagram from "../static/images/instagram.png";
import linkedin from "../static/images/linkedin.svg";
import twitter from "../static/images/twitter.png";
import GetStarted from "./GetStarted";

function Copyright() {
  return (
    <>
      <Typography variant="caption" align="center">
        {"© "} {new Date().getFullYear()} Conjonction est soumis à copyright,
        tous droits réservés :{" "}
      </Typography>
      <Typography variant="caption" align="center">
        {/* <Link
          href="/legalnotice"
          color="inherit"
          
          align="center"
        >
          Mentions légales
        </Link>
        et */}
        <Link href="/cgu" color="inherit" align="center">
          Conditions générales d'utilisation
        </Link>
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // backgroundColor: theme.palette.primary,
  },
  container: {
    paddingTop: "8rem",
    paddingBottom: "3rem",
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(1),
    // "&:hover": {
    //   backgroundColor: theme.palette.warning.dark,
    // },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  link: {
    margin: theme.spacing(3, 2.5),
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();
  // const checked = useWindowPosition("getstarted");

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid direction="column" container spacing={2}>
        <Grid item xs>
          <GetStarted />
        </Grid>
        <Grid item xs style={{ alignItems: "center", alignSelf: "center" }}>
          <Grid container>
            <Grid item xs>
              <IconButton href="https://www.linkedin.com/company/conjonction1">
                <img alt="Facebook" src={linkedin} className={classes.avatar} />
              </IconButton>
            </Grid>
            <Grid item xs>
              <IconButton>
                <img alt="Instagram" src={twitter} className={classes.avatar} />
              </IconButton>
            </Grid>
            <Grid item xs>
              <IconButton>
                <img
                  alt="Instagram"
                  src={instagram}
                  className={classes.avatar}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
}
