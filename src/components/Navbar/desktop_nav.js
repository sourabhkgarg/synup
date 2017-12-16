import React from 'react';

import './navbar.scss';

import Image from '../../components/Image/image';

import Scroll from 'react-scroll';
let Link       = Scroll.Link;

class Navbar extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container nav_abs">
        <div className="container navbar ">

          <div className="flex flex_center ">

            <div className="logo_width">

              <Image src="../../images/logo.png" style="logo" link=""/>

            </div>

            <div className="navLinks">

              <Link className="navLinks_active" to="home" spy={true} smooth={true} duration={500} offset={0}>Showcase</Link>
              <Link to="concept" spy={true} smooth={true} duration={500} offset={220}>My Account</Link>
              <Link to="hard_work" spy={true} smooth={true} duration={500} offset={220}>Track Order</Link>
              <Link to="partner" spy={true} smooth={true} duration={500} offset={220}>Pricing</Link>
              <Link to="contact" spy={true} smooth={true} duration={500} offset={220}>Contact us</Link>
              <Link to="register" spy={true} smooth={true} duration={500} offset={220}>About us</Link>

            </div>

          </div>


        </div>

      </div>


    );
  }

}



export default Navbar;


