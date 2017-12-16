import React from 'react';
import {connect} from 'react-redux';
import Review from './review';
import {postReviews} from '../../action/actions';

import moment from 'moment';

import './homepage.scss';


let lastMonth = new Date();
let current = new Date();


lastMonth.setDate(lastMonth.getDate() - 180);


const days = [{date : null , dateString : "All" }, { date :  current, dateString : "Today"}, {date : lastMonth , dateString : "Last Six Month" }
              ];

const stars = [1, 2, 3, 4, 5];


class Main extends React.Component{

  constructor(props) {
    super(props);
    this.postResponse= this.postResponse.bind(this);
    this.state= {dateShow : false, dateIndex : 0, rateIndex : 0, rateShow :false};
    this.toggle  = this.toggle.bind(this);
    this.filterByStars = this.filterByStars.bind(this);
    this.filterByDate = this.filterByDate.bind(this);

  }

  postResponse(review, textJson){

    const {selectedLocation, dispatch} = this.props;

    dispatch(postReviews(selectedLocation.id,review.id, textJson ));

  }


  filterByDate(index){
    this.setState({dateIndex : index});
    this.toggle("date");
  }



  filterByStars(index){

    this.setState({rateIndex : index});
    this.toggle("star");
  }


  toggle(type){
    if(type === "star"){
      this.setState({rateShow : !this.state.rateShow});
    }else{
      this.setState({dateShow : !this.state.dateShow});
    }
  }



  render () {

    const {reviews} = this.props;
    const {dateShow, dateIndex, rateShow , rateIndex} = this.state;

    let selectedDate = days[dateIndex];
    let rating = stars[rateIndex];
    let filteredTimeStamp = 0;

    if(selectedDate.date !== null) {
       filteredTimeStamp = moment(selectedDate.date).format('x');
    }


      let reviewArr = [];

      reviews.forEach((item, i) =>{

         let timeStamp = moment(item.date).format('x');

        if(item.rating >= rating && timeStamp >= filteredTimeStamp) {
          reviewArr.push(<Review review={item} postResponse={this.postResponse} key={i}/>);
        }

    });



    let dates = days.map((date, i) => {
      return (
        <div onClick={this.filterByDate.bind(this, i, date )}  key={i} >{date.dateString}</div>
      );
    });



    let ratings = stars.map((star, i) => {
      return (
        <div onClick={this.filterByStars.bind(this, i, star )}  key={i} >{star  === 1 ? "All" : star}</div>
      );
    });






    return (
      <div className="review_container">

        <div className="flex flex_center filters">

          <span className="label">All Interactions</span> <span>in</span>

          <div>

            <div className="dateDropDown">

              <input contentEditable={false} type="text"  onClick={this.toggle.bind(this, "date")} value={selectedDate.dateString}  />

                {dateShow ?   <div className="selectBox">
                 {dates}
               </div>  : "" }


            </div>

          </div>


          <span className="label">Rating Greater Than</span>



          <div className="dateDropDown">

            <input contentEditable={false} type="text"  onClick={this.toggle.bind(this, "star")} value={rating === 1 ? "All": rating}  />

            {rateShow ?   <div className="selectBox">
              {ratings}
            </div>  : "" }


          </div>




        </div>

        {reviewArr}

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    reviews : state.Reviews,
    selectedLocation : state.SelectedLocation
  };
}

export default connect(mapStateToProps)(Main);
