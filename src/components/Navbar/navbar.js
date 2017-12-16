
import React from 'react';
import './navbar.scss';

import Scroll from 'react-scroll';
let Link       = Scroll.Link;


class Navbar extends React.Component{

  constructor(props) {
    super(props);
    this.state = { show: false, index : 0};
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);


  }

  componentDidMount() {

  }

  onClick(index, location){

    const {fetchReviews} = this.props;

    this.setState({index : index});
    this.toggle();
    fetchReviews(location);


  }

  toggle(){
    this.setState({show : !this.state.show});

  }

  render () {


    const {locations} = this.props;
    const {index, show} = this.state;
    let selected = locations.locations[index];

    let inputVal = selected.name + ", " + selected.city;



    let locArr = locations.locations.map((location, i) => {
      return (
        <div onClick={this.onClick.bind(this, i,location )}  key={i} >{location.name + ", " + location.city}</div>
      );
    });


    return (
      <div className="container navbar">

        <div className="flex flex-center">

          <div className="logo">
            <img src="https://synup.com/images/logo.png" alt=""/>
          </div>




          <div className="dropdown">

            <input type="text"  placeholder={inputVal}  onClick={this.toggle}/>

            {show ?   <div className="selectBox">
              {locArr}
            </div>  : "" }




          </div>




        </div>



      </div>
    );
  }

}



export default Navbar;

