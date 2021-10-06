import { IconButton, InputAdornment } from "@material-ui/core/";
import { fade, makeStyles } from "@material-ui/core/styles";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import InfoIcon from "@material-ui/icons/Info";
import { showErrorOnBlur, TextField } from "mui-rff";
import PropTypes from "prop-types";
import React from "react";
import EuroImage from "../../../static/images/euro.svg";
import LightTooltip from "../general/CustomTooltip";
import Typography from "../Typography";
import "./CustomTextfield.css";

function CustomTextfield(props) {
  const useStylesReddit = makeStyles((theme) => ({
    root: {
      borderRadius: 40,
      border: "1px solid #e2e2e1",
      backgroundColor: "#FFFFFF",
      paddingLeft: props.startIcon === "euro" ? "0px" : "10px",
      paddingRight: 5,
      color: "black",
      // transition: theme.transitions.create(["border-color", "box-shadow"]),
      "label + &": {
        fontSize: 13,
        // marginLeft: "2px",
      },

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
    input: {
      "&::placeholder:after": {
        color: "black",
      },
      "&::after": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    focused: {},
  }));

  const useStylesError = makeStyles(() => ({
    helperText: {
      position: "absolute",
      top: 45,
    },
  }));
  const classes = useStylesReddit();
  const errors = useStylesError();

  const { input, InputProps, meta, inputOnChange, startIcon, info, ...rest } =
    props;

  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };
  return (
    <TextField
      {...input}
      {...inputProps}
      {...rest}
      subscription={{ touched: true, error: true }}
      InputProps={{
        classes,
        disableUnderline: true,
        autoComplete: "new-password",
        spellCheck: "false",
        ...InputProps,
        startAdornment: startIcon === "euro" && (
          <InputAdornment position="start" disablePointerEvents>
            <IconButton aria-label="toggle password visibility" tabIndex="-1">
              <img src={EuroImage} height="11px" />
              {/* 
              <EuroRoundedIcon
                style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "15px" }}
              /> */}
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <>
            {info ? (
              <LightTooltip
                title={<Typography variant="body1">{info}</Typography>}
                placement="right"
              >
                <InfoIcon
                  color="primary"
                  fontSize="small"
                  style={{ color: "#e33371" }}
                />
              </LightTooltip>
            ) : (
              ""
            )}

            <InputAdornment position="end" disablePointerEvents>
              {meta.touched && meta.error ? (
                ""
              ) : input.value && meta.valid && !meta.active ? (
                <CircleChecked fontSize="small" style={{ color: "green" }} />
              ) : null}
            </InputAdornment>
          </>
        ),
      }}
      fullWidth
      variant="standard"
      InputLabelProps={{
        shrink: true,
      }}
      showError={showErrorOnBlur}
      FormHelperTextProps={{
        className: errors.helperText,
      }}
    />
  );
}

CustomTextfield.propTypes = {
  input: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CustomTextfield;
