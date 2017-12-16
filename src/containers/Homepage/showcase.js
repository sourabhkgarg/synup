import React from 'react';
import Image from '../../components/Image/image';

import Slider from 'react-slick';




class ShowCase extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    let img =  <div className="showcase_item"><Image src="https://goo.gl/q5mDx8" style="showcase_img"/> </div>;

    return (

      <div className="showcase_slider">

        <Slider {...settings}>

          {img}
          {img}
          {img}
          {img}
          {img}
          {img}

        </Slider>

      </div>



    );
  }

}


export default ShowCase;
