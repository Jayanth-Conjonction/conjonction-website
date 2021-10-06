import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Alert from "@material-ui/lab/Alert";
import { TextField } from "mui-rff";
import React from "react";
import { Form } from "react-final-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#ADD8E63B",
    overflow: "hidden",
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },

  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: "#0037FF",
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
}));

const SimpleEmail = ({
  status,
  message,
  className,
  style,
  onSubmit,
  props,
}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const required = (value) => (value ? undefined : "Required");

  const val = [
    "Bonjour,\nEst-ce je peux avoir plus d'information sur votre outil ?\nBien cordialement,\n",
  ];

  return (
    <div className={className} style={style}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item sm={9}>
                <TextField
                  name="EMAIL"
                  type="text"
                  label="Email"
                  validate={required}
                  required
                />
              </Grid>
              <Grid item>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="add"
                  className={classes.margin}
                  onClick={handleSubmit}
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
            <br />
            <Grid item xs={12}>
              {status === "sending" && (
                <Alert severity="info">Envoie ...</Alert>
              )}
              {status === "error" && (
                <Alert severity="error">
                  Une erreur est survenue, veillez réessayer plus tard
                </Alert>
              )}
              {status === "success" && (
                <Alert severity="success">
                  Votre demande a bien été reçue !
                </Alert>
              )}
            </Grid>
          </form>
        )}
      />
    </div>
  );
};

export default SimpleEmail;
