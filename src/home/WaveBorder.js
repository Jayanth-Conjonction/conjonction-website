import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const styles = {
  waves: {
    position: "relative",
    width: "100%",
    marginBottom: -7,
    height: "9vw",
    minHeight: "9vw",
  },
};

/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */
function WaveBorder(props) {
  const id = String(Math.random());
  const { className, lowerColor, classes, viewBox, x, d, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox={viewBox}
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id={id} d={d} />
        </defs>
        <g className={classes.parallax}>
          <use href={`#${id}`} x={x} y="0" fill={lowerColor} />
        </g>
      </svg>
    </div>
  );
}

WaveBorder.propTypes = {
  lowerColor: PropTypes.string.isRequired,
  upperColor: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  animationNegativeDelay: PropTypes.number.isRequired,
};

export default withStyles(styles)(WaveBorder);
