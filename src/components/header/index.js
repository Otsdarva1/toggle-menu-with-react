import React from "react";
import Menu from "../menu";
import "./styles.css";
import { connect } from "react-redux";

const Header = props => {
  const { isOpen, toggleMenu } = props;
  return (
    <>
      <div className="header">
        <span className="menu-icon" onClick={() => toggleMenu()}>
          三
        </span>
      </div>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    isOpen: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => {
      dispatch({ type: "TOGGLE_MENU" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
