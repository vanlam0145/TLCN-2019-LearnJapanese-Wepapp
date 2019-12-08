import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import stylesHome from "./StyleHome";
import Typography from "@material-ui/core/Typography";
class HomeChallenges extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Box ml={8} mr={8} mt={4}>
          <Grid
            container
            spacing={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {this.props.children}
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}
export default withStyles(stylesHome)(HomeChallenges);
