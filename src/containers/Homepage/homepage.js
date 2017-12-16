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
    this.state= {dateShow : false, dateIndex : 0, rateIndex : 0, website: "",  siteShow :false};
    this.toggle  = this.toggle.bind(this);
    this.filterBySite = this.filterBySite.bind(this);
    this.filterByDate = this.filterByDate.bind(this);
    this.filterByStars = this.filterByStars.bind(this);

  }

  postResponse(review, textJson){

    const {selectedLocation, dispatch} = this.props;

    dispatch(postReviews(selectedLocation.id,review.id, textJson ));

  }


  filterByDate(index){
    this.setState({dateIndex : index});
    this.toggle("date");
  }



  filterBySite(site){

    this.setState({website : site});
    this.toggle("site");
  }


  filterByStars(index){

    this.setState({rateIndex : index});

  }

  toggle(type){
    if(type === "date"){
      this.setState({dateShow : !this.state.dateShow});
    }else{
      this.setState({siteShow : !this.state.siteShow});
    }
  }



  render () {

    const {reviews} = this.props;
    const {dateShow, dateIndex, siteShow , website, rateIndex} = this.state;

    let selectedDate = days[dateIndex];
    let filterWebsite = website;
    let filteredTimeStamp = 0;



    if(selectedDate.date !== null) {
       filteredTimeStamp = moment(selectedDate.date).format('x');
    }


      let reviewArr = [];

      reviews.reviews.forEach((item, i) =>{

         let timeStamp = moment(item.date).format('x');

        if( timeStamp >= filteredTimeStamp &&
          (!filterWebsite || filterWebsite === "All Platforms" || filterWebsite === item.website)
          && (!rateIndex || item.rating === rateIndex )

        ) {
          reviewArr.push(<Review review={item} postResponse={this.postResponse} key={i}/>);
          }

    });



    let dates = days.map((date, i) => {
      return (
        <div onClick={this.filterByDate.bind(this, i, date )}  key={i} >{date.dateString}</div>
      );
    });



    let sites = reviews.website.map((item, i) => {
      return (
        <div onClick={this.filterBySite.bind(this, item )}  key={i} >{item}</div>
      );
    });






    return (

      <div>

        <div className="interaction_container flex flex_center justify_between interaction_div">

          <div className= {rateIndex === 0 ?  "flex interaction is_active" :"flex interaction" }   onClick={this.filterByStars.bind(this, 0)}>

          <div className="">
            <img src="../../images/synup/interactions-all.svg" alt=""/>
          </div>

          <div className="count">

            <h3 className="blue">330</h3>
            <p>Total interaction</p>
          </div>

        </div>

          <div className= {rateIndex === 3 ?  "flex interaction is_active" :"flex interaction" } onClick={this.filterByStars.bind(this, 3)} >

            <div>
              <img src="../../images/synup/interactions-new.svg" alt="" />

            </div >

            <div className="count">
              <h3 className="yellow">330</h3>
              <p>New interactions</p>

            </div>


          </div>

          <div className= {rateIndex === 4 ?  "flex interaction is_active" :"flex interaction" } onClick={this.filterByStars.bind(this, 4)}>

            <div>
              <img src="../../images/synup/interactions-positive.svg" alt="" />

            </div>

            <div className="count">
              <h3 className="green">330</h3>
              <p>Positive interactions</p>

            </div>


          </div>

          <div  className= {rateIndex === 2 ? "flex interaction is_active" :"flex interaction" }  onClick={this.filterByStars.bind(this, 2)} >
            <div>
              <img src="../../images/synup/interactions-negative.svg" alt="" />

            </div>

            <div className="count">
              <h3 className="red">330</h3>
              <p>Negative interactions</p>

            </div>

          </div>






         </div>


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


          <span className="label">From</span>



          <div className="dateDropDown">

            <input contentEditable={false} type="text"  onClick={this.toggle.bind(this, "site")} value={filterWebsite ? filterWebsite: "All Platforms"}  />

            {siteShow ?   <div className="selectBox">
              {sites}
            </div>  : "" }


          </div>




        </div>

        {reviewArr}

      </div>

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
