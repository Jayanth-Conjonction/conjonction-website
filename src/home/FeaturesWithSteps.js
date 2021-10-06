import {
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "../components/common/Typography";
import gestion from "../static/images/gestion.png";
import investissement from "../static/images/investissement.png";
import prise_decision from "../static/images/prise_decision.png";
import vue_ensemble from "../static/images/vue_ensemble.png";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    maxWidth: "1050px",
  },
  TwoColumn: {
    position: "flex",
    maxWidth: "1200px",
    width: "100%",
  },

  [theme.breakpoints.down("sm")]: {
    RightColumn: {
      alignItems: "center",
      justify: "center",
    },
  },
  list: {
    width: "100%",
    maxWidth: "100%",
  },
}));

const listStyling = makeStyles((theme) => ({
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "35px",
    display: "flex",

    [theme.breakpoints.up("lg")]: {
      flexDirection: ({ flexDirection }) => flexDirection,
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  listIcon: {
    flexDirection: "row",
    textAlign: "left",
    padding: "24px",
  },
  listIllustration: {
    position: "relative",
    display: "block",
    verticalAlign: "middle",
    borderRadius: 20,
    objectFit: "contain",
    width: "636px",
    [theme.breakpoints.up("lg")]: {
      width: "650px",
    },
    [theme.breakpoints.down("md")]: {
      width: "630px,",
    },
    [theme.breakpoints.down("xs")]: {
      width: "320px",
    },
  },
  listText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: ({ textAlign }) => textAlign,
    fontSize: "5px",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "5px",
    },
  },
}));

export default () => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const classes = useStyles();
  // const checked = useWindowPosition("team");

  const contentData = [
    {
      id: 1,
      title: "Investissement",
      content:
        "Sélectionnez les biens qui vous correspondent et investissez, seul ou à plusieurs",
      image: investissement,
      video_src: "",
      flexDirection: "row",
    },
    {
      id: 2,
      title: "Gestion",
      content:
        "Baux commerciaux ou d’habitation, quittancement, indexation, récupération des charges, travaux, vie de la copropriété : soyez serein",
      image: gestion,
      flexDirection: "row-reverse",
      video_src: "",
    },
    {
      id: 3,
      title: "Prise de décision",
      content:
        "Actif, passif, revenus et charges : consolidez vos sociétés et votre situation personnelle en temps réel, suivez la réalisation de vos objectifs",
      image: vue_ensemble,
      flexDirection: "row",
      video_src: "",
    },
    {
      id: 4,
      title: "Vue d'ensemble",
      content:
        "Recevez des alertes, identifiez les risques et les sources d’économies, anticipez les règlementations à venir, sachez quand et quoi arbitrer",
      image: prise_decision,
      flexDirection: "row-reverse",
      video_src: "",
    },
  ];

  return (
    <div id="featuressteps">
      <Container className={classes.container}>
        {/* <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}> */}

        <Grid
          container
          direction="column"
          justify="flex-start"
          alignContent="flex-start"
          spacing={2}
          className={classes.RightColumn}
        >
          <Grid item xs>
            <List
              className={classes.list}
              // component="ul"
              // cols={getGridListCols()}
            >
              {contentData.map((data) => {
                const flexDirection = data.flexDirection;
                const textAlign = data.textAlign;
                const listStyles = listStyling({ flexDirection, textAlign });

                return (
                  <>
                    <ListItem
                      key={data}
                      alignItems="center"
                      className={listStyles.listItem}
                    >
                      <ListItemIcon
                        id={data.id}
                        className={listStyles.listIcon}
                      >
                        <CardMedia
                          component="img"
                          className={listStyles.listIllustration}
                          image={data.image}
                          // autoPlay
                          // loop
                          // muted
                          // playsInline
                          // play
                        />
                      </ListItemIcon>

                      <ListItemText
                        id={data.id}
                        primary={
                          <Typography
                            variant="h2"
                            style={{ fontSize: "30px", marginBottom: "10px" }}
                          >
                            {data.title}
                          </Typography>
                        }
                        className={listStyles.listText}
                        secondary={
                          <Typography variant="body1" color="textPrimary">
                            {data.content}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </>
                );
              })}
            </List>
          </Grid>
        </Grid>

        {/* </Collapse> */}
      </Container>
    </div>
  );
};
