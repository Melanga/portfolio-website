import React from "react";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";

class Home extends React.Component {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    let toggledOption = !this.state.isOpen;
    this.setState({ isOpen: toggledOption });
  };

  render() {
    return (
      <React.Fragment>
        <SideNavBar onToggle={this.toggleIsOpen} isOpen={this.state.isOpen} />
        <NavBar onToggle={this.toggleIsOpen} />
      </React.Fragment>
    );
  }
}

export default Home;
