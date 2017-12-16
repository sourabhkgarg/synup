
import React from 'react';
import {connect} from 'react-redux';

import Scroll from 'react-scroll';
let Link = Scroll.Link;
var scroller = Scroll.scroller;

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

  }

  onClick(link){
    this.props.toggleSideBar();
    scroller.scrollTo(link, {
      offset: 220
    });
  }



  render () {
    let show = this.props.show;


    return (
      <div className={show ? "pointer-auto left-side-bar-wrapper" : "left-side-bar-wrapper"}>

        <div className={show ? "side-bar-background opacity-1" : "side-bar-background"} onClick={this.props.toggleSideBar}/>

        <div className= {show ? "left-side-bar-75 showSideBar" : "left-side-bar-75"}>


          <div className="navLinks">

            <Link to="home" spy={true} smooth={true} duration={500} offset={0} onClick={this.onClick.bind(this,"home")}>Home</Link>
            <Link to="concept" spy={true} smooth={true} duration={500} offset={220} onClick={this.onClick.bind(this,"concept")}>The concept</Link>
            <Link to="hard_work" spy={true} smooth={true} duration={500} offset={220} onClick={this.onClick.bind(this,"hard_work")}>Hard work to Hard fun</Link>
            <Link to="partner" spy={true} smooth={true} duration={500} offset={220} onClick={this.onClick.bind(this,"partner")} >Partners</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} offset={220} onClick={this.onClick.bind(this,"contact")}>Contact us</Link>
            <Link to="register" spy={true} smooth={true} duration={500} offset={220} onClick={this.onClick.bind(this,"register")}>Register</Link>

          </div>

        </div>



      </div>

    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
