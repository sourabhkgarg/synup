import React from 'react';
import {connect} from 'react-redux';




class Review extends React.Component{

  constructor(props) {
    super(props);
    this.state = {show :false, text: ""};
    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.sendResponse = this.sendResponse.bind(this);
  }

  onChange(e){

    this.setState({text :e.target.value});

  }

  toggle(){
    this.setState({show : !this.state.show});
  }

  sendResponse(){

    const { text} = this.state;
    const {review} = this.props;

    const {postResponse} = this.props;
    if(text.length > 0) {

      let textjson = {content : text};

      postResponse(review, textjson);
      this.toggle();
      this.setState({text: ""});

    }
  }







  render () {

    const {review} = this.props;
    const {show, text} = this.state;

    const {author_name, comment, date, id, rating, title} = review ;

    return (

        <div className="flex reviews_div">

          <div className="author_detail">

            <div className="flex">

              <div className="icons">
                <img src="../../images/synup/yelp.com.png" alt=""/>
                <span>Yelp</span>

              </div>

              <div className="author_rating">
                <span>{author_name}</span>
                <div>{rating}</div>

              </div>

            </div>

            <p className="created_on">Created on {date}</p>

          </div>

          <div className="author_comment">

            <div className="author_cmt_s">
              <h3>{title}</h3>
              <p>{comment}</p>
            </div>


            <div>

              <button className="respond_btn" onClick={this.toggle}>RESPOND</button>


              {show ?  <div className="respond_div">
                <textarea type="text" placeholder="Type your response here" value={text} onChange={this.onChange}
                > </textarea>

                <button className="respond_btn" onClick={this.sendResponse}>SEND </button>
                  <button className="respond_cancel" onClick={this.toggle}>Cancel</button>

               </div> : "" }


            </div>


          </div>



        </div>

    );
  }

}


export default Review;
