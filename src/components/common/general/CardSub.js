import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "../../common/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  gridListbar: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  actions: {
    borderRadius: 20,
    borderColor: theme.palette.primary,
  },
  icon: {
    height: 80,
    width: 80,
    borderRadius: 5,
    padding: 7,
  },
  card: {
    marginBottom: 15,
    borderRadius: 15,
    borderRadius: 18,
    border: `3px solid white`,
    background: "#FFFFFF",
    "&:hover": {
      border: `3px solid pink`,
    },
    minWidth: "250px",
  },
  checkbox: {
    // border: "2px solid",
    // borderColor: theme.palette.primary.main,
    background: "transparent",

    "&:hover": {
      backgroundColor: "transparent !important",
    },
    "&:active, &:focus": {},
    "&:selected": {},
  },
  checkedicon: {
    height: 80,
    width: 80,
    borderRadius: 5,
    padding: 7,
    // border: "2px solid #008000",
  },

  error: {
    // position: "absolute",
    // top: "100px",
    // left: "120px",
    fontSize: 14,
    padding: "0px 0px",
    width: 300,
  },
  checked: {
    "&, & + $label": {
      color: "green",
    },
  },
  label: {},
  sidebar: {
    borderRadius: 18,
  },
  cardAction: {
    minHeight: "172px",
    border: "2px solid",
    width: "250px",
    borderColor: "#E7EDF3",
    borderRadius: 16,
    transition: "0.4s",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      width: "150px",
    },
  },
  cardActionArea: {
    minHeight: "172px",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  selectedAction: {
    border: "2px solid",
    width: "250px",
    minHeight: "172px",

    borderColor: theme.palette.primary.main,
    borderRadius: 16,
    transition: "0.4s",
  },
  disabledAction: {
    width: "250px",
    borderRadius: 16,
    transition: "0.4s",
    background: "#F4F7F9",
  },
  typoHeader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },

  typoPrice: {
    color: theme.palette.primary.main,
    fontSize: 18,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
}));

// export default Images;

export default function CardDesign({
  key,
  header,
  price,
  model,
  frequency,
  special,
  onClick,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.cardAction}>
      <CardActionArea className={classes.cardActionArea} onClick={onClick}>
        <CardHeader
          title={
            <Typography
              variant="subtitle1"
              color="textPrimary"
              align="center"
              className={classes.typoHeader}
            >
              {header}
            </Typography>
          }
          style={{ textAlign: "flex-start" }}
        ></CardHeader>
        <CardContent key={key} className={classes.content}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            spacing={3}
          >
            <Grid item xs>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.typoPrice}
                align="center"
              >
                {price}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                style={{ fontSize: 12 }}
                align="center"
              >
                {model}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                style={{ fontSize: 12 }}
                align="center"
              >
                {frequency}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                style={{ fontSize: 12 }}
                align="center"
              >
                {special}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
