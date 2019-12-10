import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as uiActions from "../../actions/GlobalLoading";
import styles from "./styles";
import loadingIcon from "../../assets/loading.gif";
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.gloabalLoading}>
          <img src={loadingIcon} alt="Loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}
GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    showLoading: state.GlobalLoading.showLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    uiActionsCreators: bindActionCreators(uiActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(GlobalLoading);
