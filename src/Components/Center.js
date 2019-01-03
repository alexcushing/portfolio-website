import React from "react";
import "./Center.css";
import PropTypes from "prop-types";


const Center = props => (
  <div
    className={props.animated ? `plCenter animated-fadeInUp-fast ${props.classNames}` : `plCenter ${props.classNames}`}
    style={{
      display: props.inline ? 'inline-flex' : 'flex',
      flexDirection: props.row ? 'row' : 'column',
      marginLeft: props.knownWidth ? `calc(50% - ${props.knownWidth}px)` : 0,
      borderLeft: props.bordered && `solid 4px ${props.borderColor || '#626161'}`,
      float: props.right && 'right'
    }}
  >
    {props.children}
  </div>
);

Center.propTypes = {
  children: PropTypes.node.isRequired,
  knownWidth: PropTypes.number,
  inline: PropTypes.bool,
  row: PropTypes.bool,
  right: PropTypes.bool,
  animated: PropTypes.bool,
  borderColor: PropTypes.string,
  bordered: PropTypes.bool,
  classNames: PropTypes.string
};

Center.defaultProps = {
  knownWidth: 0,
  inline: false,
  row: true,
  right: false,
  animated: true,
  borderColor: '',
  bordered: false,
  classNames: ''
}


export default Center;
