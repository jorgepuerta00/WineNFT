import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, children }) => {
  return (
    <div className="shop-header px-5 d-flex justify-content-end align-items-center">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
