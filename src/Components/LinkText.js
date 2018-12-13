import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./LinkText.css";

const LinkText = props => (
  <a
    href={props.to}
    className={cx({
      "plLinkText--title": props.isTitle,
      "plLinkText": !props.isTitle
    })}
    target="_blank"
    style={{
      margin: props.margin,
      color: props.colorOverride || ''
    }}
  >
    {props.text || props.children}
  </a>
);

LinkText.propTypes = {
  text: PropTypes.any,
  isTitle: PropTypes.bool,
  margin: PropTypes.string,
  colorOverride: PropTypes.string,
  children: PropTypes.node
};

LinkText.defaultProps = {
  text: null,
  isTitle: false,
  margin: '0',
  colorOverride: null,
  children: null
};

export default LinkText;
