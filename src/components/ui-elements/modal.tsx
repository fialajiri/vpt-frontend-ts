import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./backdrop";

export interface IModalOverlayProps {
  className?: string;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
  header?: string | null;
  footer?: string | JSX.Element;
  onSubmit?: () => {};
  children?: React.ReactNode;
}

const ModalOverlay: React.FC<IModalOverlayProps> = (props) => {
  const content = (
    <div className={`modal ${props.className}`}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2 className="heading-secondary">{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook")!);
};

export interface IModalProps {
  show: boolean;
  onCancel: () => void;
  modalProps?: IModalOverlayProps
}

const Modal: React.FC<IModalProps> = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props.modalProps} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
