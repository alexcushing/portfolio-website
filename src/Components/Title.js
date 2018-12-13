import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = props => (
  <div
    className={props.isSubtitle ? "plTitle--subtitle" : props.isSmallSubtitle ? "plTitle--small-subtitle" : "plTitle"}
    style={{
      margin: props.margin,
      padding: props.padding,
      background: props.hasBackground ? '#f3f7f9' : 'none',
      maxWidth: props.hasBackground ? '400px' : 'none',
      flex: props.hasBackground ? '1' : '',
      color: props.color && props.color
    }}
  >
    {props.hasBackground && "\""}{props.text}{props.hasBackground && "\""}
  </div>
);

Title.propTypes = {
  text: PropTypes.any,
  margin: PropTypes.string,
  padding: PropTypes.string,
  hasBackground: PropTypes.bool,
  color: PropTypes.string,
  isSmallSubtitle: PropTypes.bool
};

Title.defaultProps = {
  text: "",
  margin: "0",
  padding: "0",
  hasBackground: false,
  color: '',
  isSmallSubtitle: false
};

export default Title;
