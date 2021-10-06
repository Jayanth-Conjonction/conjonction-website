import {
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";
// import defaultCardImage from "images/shield-icon.svg";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "../components/common/Typography";
import customizeicon from "../static/images/customizeicon.svg";
import fasticon from "../static/images/fasticon.svg";
import simpleicon from "../static/images/simpleicon.svg";

const useStyles = makeStyles((theme) => ({
  Container: {
    position: "relative",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  TwoColumn: {
    position: "flex",
    // paddingTop: "6rem",
    // paddingBottom: "6rem",
    maxWidth: "1200px",
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  gridList: {
    display: "flex",
    // listStyle: "none",
    // overflowY: "auto",
    flexWrap: "nowrap",
    justify: "center",
    position: "flex",
    alignContent: "center",

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  gridItem: {
    alignItems: "center",
  },

  listItem: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)",
    alignItems: "flex-start",
    justify: "flex-start",
  },
  listIcon: {
    flexDirection: "row",
    alignItems: "flex-start",
    textAlign: "left",

    marginRight: 20,
  },
  listText: {
    flexDirection: "row",
    alignItems: "flex-start",
    textAlign: "left",
    padding: "0 15px 20px 0",
  },

  title: {
    color: theme.palette.primary.main,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  Decorator: {
    position: "absolute",

    display: "block",
    pointer: "none",
    right: 0,
    bottom: 0,
    // left: "50%",
    height: 320,
    width: 320,
    transform: "translate(100%,30%)",
    // transform: "translateX(-50%)",

    opacity: 0.35,
  },
  [theme.breakpoints.up("md")]: {
    gridItem: {
      alignItems: "flex-start",
      // display: "flex",
    },
  },
  [theme.breakpoints.down("md")]: {
    Decorator: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: "10rem",
      height: "10rem",
      transform: "translate(50%,10%)",
    },
  },
}));

export default () => {
  const classes = useStyles();

  const contentData = [
    {
      id: 1,
      image: fasticon,
      title: "Efficace",
      content:
        "Automatisez les tâches chronophages, soyez alerté des opportunités",
    },
    {
      id: 2,
      image: simpleicon,
      title: "Fiable",
      content:
        "Anticipez les échéances importantes, retrouvez aisément vos documents",
    },
    {
      id: 3,
      image: customizeicon,
      title: "Personnalise",
      content: "Définissez vos objectifs, soyez accompagnés de nos experts",
    },
  ];

  return (
    <div id="features">
      <Container maxWidth="md" className={classes.Container}>
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justify="center"
          className={classes.TwoColumn}
          direction="column"
          spacing={3}
        >
          <Grid item xs>
            <Typography variant="h4" align="center">
              L’IMMOBILIER N'A JAMAIS ÉTÉ AUSSI FACILE
            </Typography>
          </Grid>

          <Grid item className={classes.gridItem}>
            <List component="ul" className={classes.gridItem}>
              {contentData.map((data) => (
                <>
                  <ListItem key={data.id} className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                      <CardMedia component="img" image={data.image} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6">{data.title}</Typography>
                      }
                      className={classes.listText}
                      secondaryTypographyProps={{ width: "20%" }}
                      secondary={
                        <Typography variant="body1">{data.content}</Typography>
                      }
                    />
                  </ListItem>
                </>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      {/* </Collapse> */}
    </div>
  );
};
