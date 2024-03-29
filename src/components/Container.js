import React, { Component } from 'react';
import { Modal } from './Modal';
import TriggerButton from './TriggerButton';
export class Container extends Component {
  constructor(props) {
    super(props);
    };
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) { // ESC key
      this.closeModal();
    }
  };
  /* onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  }; */
  updateTable = () => {
    this.props.parentCallbackUpdateTable();
    //console.log("on Container level");
  }

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerText={this.props.triggerText}
          className={this.props.className}
        />
        {this.state.isShown ? (
          <Modal
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            type={this.props.type}
            obj={this.props.obj}
            triggerText={this.props.triggerText}
            parentCallbackUpdateTable={this.updateTable}
            /* onClickOutside={this.onClickOutside} */
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;
