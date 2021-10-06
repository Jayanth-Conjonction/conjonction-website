import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "../components/common/form/CustomButton";
import Typography from "../components/common/Typography";
import MailchimpDialog from "../components/MailChimp/MailchimpDialog";
import SvgDecoratorBlob from "../static/images/svg-decorator-blob-9.svg";

const useStyles = makeStyles((theme) => ({
  Container: {
    position: "relative",
    // minWidth: "768px",
    // alignItems: "stretch",
    // flexDirection: "row",
    // justfiyContent: "center",
    // paddingTop: "3rem",
    // paddingBottom: "6rem",
  },
  Card: {
    // maxWidth: 345,
    display: "block",
    position: "relative",
    borderRadius: 20,
    padding: 12,
    backgroundColor: theme.palette.secondary.light,
    zIndex: 2,
    // opacity: 0.1,
  },
  Decorator1: {
    position: "absolute",
    display: "block",
    pointer: "none",
    overflow: "hidden",

    left: 0,
    bottom: 0,
    height: 250,
    width: 250,
    zIndex: 1,
    transform: "translate(-20%, 30%)",
  },
  Decorator2: {
    position: "absolute",
    display: "block",
    pointer: "none",
    overflow: "hidden",
    inset: 0,
    height: 250,
    width: 250,
    zIndex: 1,
    transform: "translate(370%, -70%)",
  },
  Button: {
    padding: theme.spacing(2, 2),
  },
  [theme.breakpoints.down("md")]: {
    Card: {
      padding: 40,
    },
    Button: {
      minWidth: 120,
      // padding: theme.spacing(0.5, 0.5),
    },
    Grid: {
      alignItems: "center",
      justify: "center",
    },
    Typography: { textAlign: "right" },
  },
  [theme.breakpoints.down("sm")]: {
    Button: {
      fontSize: 10,
      padding: theme.spacing(0, 0),
      marginBottom: 0,
    },
    ButtonGrid: {
      display: "flex",
      textAlign: "center",
      marginBottom: 0,
    },
    Typography: { textAlign: "left" },
  },
}));

export default ({}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="getstarted">
      <Card className={classes.Card}>
        <CardContent>
          <CardMedia
            component="img"
            className={classes.Decorator1}
            mountOnEnter
            image={SvgDecoratorBlob}
            alt="Dots"
          />
          <Grid
            container
            justifyContent="space-around"
            alignItems="flex-start"
            className={classes.Grid}
          >
            <Grid item xs={6} sm={7}>
              <Typography
                variant="h4"
                color="inherit"
                className={classes.Typography}
                align="left"
              >
                Rejoignez l'aventure
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                className={classes.Typography}
                align="left"
              >
                Conjonction
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={7}
              md={5}
              alignItems="center"
              justifyContent="center"
              className={classes.ButtonGrid}
              spacing={1}
            >
              <Grid item>
                <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  color="primary"
                  className={classes.Button}
                  size="large"
                  content="Inscrivez-vous"
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={handleClickOpen}
                  variant="outlined"
                  color="primary"
                  className={classes.Button}
                  size="large"
                  content="Contactez-nous"
                />
              </Grid>
            </Grid>
          </Grid>
          <MailchimpDialog open={open} onClose={handleClose} />
          <CardMedia
            component="img"
            className={classes.Decorator2}
            image={SvgDecoratorBlob}
            alt="Dots"
          />
        </CardContent>
      </Card>
    </div>
  );
};
