import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { Field, Form } from "react-final-form";
import Button from "../../components/common/form/CustomButton";
import CustomPhoneNumber from "../../components/common/form/CustomPhoneNumber";
import CustomTextfield from "../../components/common/form/CustomTextfield";
import Typography from "../../components/common/Typography";

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
    marginTop: theme.spacing(1),
  },
}));

const SimpleForm = ({ status, className, style, onSubmit }) => {
  const classes = useStyles();

  const required = (value) => (value ? undefined : "Required");

  return (
    <div className={className} style={style}>
      <Form
        onSubmit={onSubmit}
        // initialValues={{ PROSPECT: abc }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid item xs={12} sm container>
              <Grid item xs container spacing={3}>
                <Grid item sm={12}>
                  <Typography variant="body2">
                    Vous souhaitez être appelé par un conseiller, remplissez ce
                    formulaire de contact.
                  </Typography>
                </Grid>

                <Grid item sm={12}>
                  <Field
                    name="EMAIL"
                    component={CustomTextfield}
                    type="text"
                    label="Email"
                    variant="filled"
                    validate={required}
                    required
                  />
                </Grid>
                <Grid item sm={12}>
                  <Field
                    name="LNAME"
                    component={CustomTextfield}
                    type="text"
                    label="Nom d'usage"
                    variant="filled"
                    validate={required}
                    required
                  />
                </Grid>

                <Grid item sm={12}>
                  <Field
                    name="FNAME"
                    component={CustomTextfield}
                    type="text"
                    label="Prénom"
                    variant="filled"
                    validate={required}
                    required
                  />
                </Grid>
                <Grid item sm={12}>
                  <Field
                    name="PHONE"
                    component={CustomPhoneNumber}
                    type="text"
                    label="Téléphone"
                    variant="filled"
                    validate={required}
                    required
                  />
                </Grid>
                <Grid
                  item
                  sm={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleSubmit}
                    autoFocus
                    content="Envoyer"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                {/* <div className={classes.alert}> */}
                {status === "sending" && (
                  <Alert severity="info">Envoi ...</Alert>
                )}
                {status === "error" && (
                  <Alert severity="error">
                    Une erreur est survenue, veuillez réessayer plus tard
                    {/* <div dangerouslySetInnerHTML={{ __html: message }} /> */}
                  </Alert>
                )}
                {status === "success" && (
                  <Alert severity="success">
                    Votre demande a bien été reçue !
                    {/* <div dangerouslySetInnerHTML={{ __html: message }} /> */}
                  </Alert>
                )}
                {/* </div> */}
              </Grid>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </Grid>
          </form>
        )}
      />
    </div>
  );
};

export default SimpleForm;
