import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import {fetchLocation, fetchReviews} from '../action/actions';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.fetchReviews = this.fetchReviews.bind(this);
  }


  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(fetchLocation());

  }

  fetchReviews(location){

    const {dispatch} = this.props;
    dispatch(fetchReviews(location));

  }


  render() {

    const {locations, reviews} = this.props;


    return (
      <div className="container">

        {locations ? <Navbar locations ={locations} fetchReviews={this.fetchReviews}/> : "" }

        {reviews ?  this.props.children : "" }


        <Footer />

      </div>
    );
  }

}


function mapStateToProps(state) {

  return {
    locations : state.Locations,
    reviews : state.Reviews
  };


}

export default connect(mapStateToProps)(Main);
