import React from 'react';
import Image from '../../components/Image/image';

import UploadIcon from '../../images/Icons/upload';
import PayIcon from '../../images/Icons/pay';
import DrawIcon from '../../images/Icons/draw';
import ApproveIcon from '../../images/Icons/approve';
import ShipIcon from '../../images/Icons/ship';


const how_works_text = [
  {img : <UploadIcon/> , text : "You Upload"},
  {img : <PayIcon/> , text : "You Pay"},
  {img : <DrawIcon/> , text : "We Draw"},
  {img : <ApproveIcon/> , text : "You Approve"},
  {img : <ShipIcon/> , text : "We Ship"}];


class Pricing extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    let arr = how_works_text.map((item, i) => {

      return (
        <div className="it_works_f_item" key={i}>

          <div className="works_f_img">
            {item.img}
          </div>

          <p>{item.text}</p>

        </div>

      )

    });




    return (

      <div>

        <div className="flex it_works_flex">

          {arr}


        </div>




      </div>



    );
  }

}


export default Pricing;
