import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
class ModalUsername extends Component {
  render() {
    const { ModalUsername } = this.props;
    const { ShowModal } = ModalUsername;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={ShowModal}
        // onClose={closeModal}
      >
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </Modal>
    );
  }
}
const mapStateToProps = state => {
  return {
    ModalUsername: state.ModalUsername
  };
};
const mapDispatchToProps = dispatch => {
  //   return {
  //     menuActionCreators: bindActionCreators(menuActions, dispatch)
  //   };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect(ModalUsername);
