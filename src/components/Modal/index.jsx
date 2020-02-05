import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Modal = props => {
  const _handlePrimaryAction = () => {
    props.onPrimaryAction();
  };

  const _handleSecondaryAction = () => {
    props.onSecondaryAction();
  };
  const { type, primaryButton, secondaryButton, bottom, className } = props;
  const classes = classnames(className);
  return (
    <div
      className={
        "Modal " +
        (bottom ? "w-100p p-absolute b-0 Modal__bottom " : "") +
        classes
      }
    >
      <div
        className={
          "Modal__content " +
          (type === "renderProp" ? "pt-0 pb-0 pl-0 pr-0" : "")
        }
      >
        {type !== "renderProp" ? (
          <h1 className="Modal__heading">{props.title}</h1>
        ) : (
          ""
        )}
        <Choose>
          <When condition={type === "renderProp"}>{props.children}</When>
          <Otherwise>
            <p className="Modal__copy">{props.message}</p>
          </Otherwise>
        </Choose>
      </div>
      {!bottom ? (
        <div className="Modal__actions">
          <If condition={primaryButton}>
            <a
              className="Modal__action Modal__action--primary"
              onClick={_handlePrimaryAction}
            >
              {primaryButton}
            </a>
          </If>
          <If condition={secondaryButton}>
            <a className="Modal__action" onClick={_handleSecondaryAction}>
              {secondaryButton}
            </a>
          </If>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Modal.propTypes = {
  onPrimaryAction: PropTypes.func,
  onSecondaryAction: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf([
    "info",
    "warning",
    "error",
    "renderProp",
    "caution",
    "success",
    "failed"
  ]),
  primaryButton: PropTypes.string,
  bottom: PropTypes.bool,
  secondaryButton: PropTypes.string
};

Modal.defaultProps = {
  type: "info",
  onPrimaryAction: () => {},
  onSecondaryAction: () => {},
  title: "",
  message: "",
  primaryButton: "",
  secondaryButton: "",
  bottom: false
};

export default Modal;
