import React, { useEffect } from "react";
import PropTypes from "prop-types";

const MODAL_OPEN_CLASS = "body--modal-open";

const Overlay = props => {
  useEffect(() => {
    document.body.classList.add(MODAL_OPEN_CLASS);
    return () => {
      document.body.classList.remove(MODAL_OPEN_CLASS);
    };
  }, []);

  return (
    <div className="Overlay" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  bottom: PropTypes.bool
};

Overlay.defaultProps = {
  children: null,
  onClick: event => {},
  bottom: false
};

Overlay.displayName = "Overlay";

export default Overlay;
