import { IconButton, InputAdornment } from "@material-ui/core/";
import { fade, makeStyles } from "@material-ui/core/styles";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import MuiPhoneNumber from "material-ui-phone-number";
import PropTypes from "prop-types";
import React from "react";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    borderRadius: 40,
    border: "1px solid #e2e2e1",
    backgroundColor: "#FFFFFF",
    fontSize: 13,
    paddingLeft: 3,

    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&$focused": {
      backgroundColor: theme.palette.secondary.light,
      border: `1px solid ${fade(theme.palette.primary.main, 0.25)}`,

      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
    },

    "&$:focused:after": {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: 20,

      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: "green",
    },
  },
  focused: {},
}));

function CustomTelfield(props) {
  const classes = useStylesReddit();

  const { input, meta, InputProps, inputOnChange, ...rest } = props;

  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };

  return (
    <MuiPhoneNumber
      // value={input.value.value}
      // onChange={(value) => input.onChange(value)}
      id="contact-form-id-phone"
      fullWidth
      variant="filled"
      // classes={classes.root}
      label="Numéro de Téléphone"
      defaultCountry={"fr"}
      {...input}
      {...inputProps}
      {...rest}
      fullWidth
      variant="standard"
      InputProps={{
        classes,
        disableUnderline: true,
        autoComplete: "new-password",
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" tabIndex="-1">
              {meta.touched && meta.error ? (
                ""
              ) : input.value && meta.valid && !meta.active ? (
                <CircleChecked fontSize="small" style={{ color: "green" }} />
              ) : null}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

    // <TextField
    //   {...input}
    //   {...inputProps}
    //   {...rest}
    //   InputProps={{
    //     classes,
    //     disableUnderline: true,
    //     ...InputProps,
    //   }}
    //   // inputOnChange={(event, value) => input.onChange(value.toUpperCase())}
    //   fullWidth
    //   variant="filled"
    // />
  );
}

CustomTelfield.propTypes = {
  autoComplete: PropTypes.string,
  input: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CustomTelfield;
