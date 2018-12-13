import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

const Page = props => (
  <div className={props.isFlex ? "plPage plPage--isFlex" : "plPage"}>
    {props.children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  isFlex: PropTypes.bool
}

Page.defaultProps = {
  isFlex: false
}

export default Page;
