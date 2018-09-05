// @flow

import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  appBar: {
    backgroundColor: "#009688"
  },
  addButton: {
    position: "absolute",
    right: 0,
    color: "#000",
    marginRight: "20px"
  }
};
class AppToolbar extends Component<any> {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              SPA CRUD with React 16.3
            </Typography>
            <Button
              variant="fab"
              color="secondary"
              aria-label="Add"
              className={classes.addButton}
              onClick={() => {
                this.props.showHomeIcon
                  ? this.nextPath("/")
                  : this.nextPath("/CreateUser");
              }}
            >
              {this.props.showHomeIcon ? <HomeIcon /> : <AddIcon />}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AppToolbar));
