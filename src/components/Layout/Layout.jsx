import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/ToolBar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  toggel = () => {
    const change = !this.state.showSideDrawer;
    this.setState({ showSideDrawer: change });
  };

  render() {
    return (
      <>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggle={this.toggel}
        ></Toolbar>
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token != null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
