import React from 'react';
import LeftSideBar from './leftSideBar';

import HamMenu from './ham';

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {show : false};
    this.toggleSideBar = this.toggleSideBar.bind(this);

  }

  componentDidMount() {

  }

  toggleSideBar(){

    this.setState({show : !this.state.show});

  }


  render () {



    return (
      <div>

        <div className="ham-menu-div" onClick={this.toggleSideBar}>
          <HamMenu />
        </div>

        <LeftSideBar toggleSideBar={this.toggleSideBar} show = {this.state.show}/>

      </div>

    );
  }

}

export default Main;
