import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Emoji from "react-emoji-render";
import Typography from "../components/common/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "3rem",
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  [theme.breakpoints.down("sm")]: {
    LeftColumn: {
      alignItems: "center",
      justify: "center",
    },
  },
}));

export default () => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const classes = useStyles();

  return (
    <div id="team">
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          className={classes.title}
        >
          <Grid item xs>
            <Typography variant="h4" align="center">
              Un mot sur nous <Emoji text=":handshake:" />
            </Typography>
          </Grid>

          <Grid item xs>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              className={classes.Typography}
            >
              Tout a commencé par les nombreuses questions que se posent les
              investisseurs immobiliers et les bailleurs : bien acheter, bien
              gérer, prendre les bonnes décisions au bon moment, gagner du
              temps, sécuriser ses revenus et développer son patrimoine, faire
              des économies et entretenir des relations de confiance avec ses
              locataires et ses fournisseurs.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              className={classes.Typography}
            >
              C’est pour répondre à ces besoins auxquels nous avons été
              confrontés quotidiennement, que, forts de notre expérience de 20
              ans en investissement et gestion de biens, tant commerciaux que
              d’habitation, nous avons créé l’outil Conjonction. Nous avons pour
              cela regroupé les expériences et les expertises d’investisseurs et
              de bailleurs, de professionnels de l’immobilier ainsi que
              d’assureurs, de juristes et même de locataires.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
