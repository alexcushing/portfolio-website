import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => (
  <div className={`plCard ${props.classNames}`}>
    {props.children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string
}

export default Card;
