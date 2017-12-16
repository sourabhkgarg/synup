import React from 'react';
import Image from '../../components/Image/image';


class Pricing extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    return (

      <div>
        <div className="flex ">

          <div className="pricing_img_lg">
            <Image src="https://goo.gl/q5mDx8" style="pricing_img"/>

          </div>

          <div className="pricing_info_lg">

            <h3>A1 - Large</h3>
            <h5> DIMENSION - 23 * 33 inches </h5>

            <h4>Rs 15,800</h4>

            <p>Maximum 4 subjects</p>


          </div>

        </div>

        <div className="flex margin_100">


          <div className="flex  pricing_md">

            <div className="pricing_img_div">
              <Image src="https://goo.gl/q5mDx8" style="pricing_img"/>

            </div>

            <div className="pricing_info_div">

              <h3>A2 - Medium</h3>
              <h5> DIMENSION - 16 * 23 inches </h5>

              <h4>Rs 10,800</h4>

              <p>Maximum 2 subjects</p>


            </div>

          </div>

          <div className="flex  pricing_sm">

            <div className="pricing_img_div">
              <Image src="https://goo.gl/q5mDx8" style="pricing_img"/>

            </div>

            <div className="pricing_info_div">

              <h3>A3 - Small</h3>
              <h5> DIMENSION - 11 * 16 inches </h5>

              <h4>Rs 6,800</h4>

              <p>Maximum 1 subjects</p>


            </div>

          </div>

        </div>


      </div>



    );
  }

}


export default Pricing;
