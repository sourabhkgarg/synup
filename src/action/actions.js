
import {getQueryStringValue, getCookie } from './cookies';
import * as Type from './actionConstants';
import {setLocaleStorage} from '../helperFunction/localStorage';
import {browserHistory} from 'react-router';
import api from '../api/api';


export function dispatchAction(type, payload){
  return function(dispatch){
    dispatch({ type: type , payload: payload});
  };
}






export function fetchLocation(){

  return function (dispatch) {

    return api.fetchLocations().then(response =>{
      let parsedResult = JSON.parse(response.text);

      dispatch(dispatchAction(Type.GET_LOCATIONS, parsedResult));
      let firstElement = parsedResult.locations[0];

      dispatch(dispatchAction(Type.SELECT_LOCATION, firstElement));

      dispatch(fetchReviews(firstElement));

    });
  };

}





export function fetchReviews(location){

  return function (dispatch) {

    return api.fetchReviews(location.id).then(response =>{

      let parsedResult = JSON.parse(response.text);

      let flattenedArray = flattenArray(parsedResult.reviews);

      dispatch(dispatchAction(Type.GET_REVIEWS, flattenedArray));

      dispatch(dispatchAction(Type.SELECT_LOCATION, location));


    });
  };

}


export function postReviews(locationId, review_id, data){

  return function (dispatch) {

    return api.postReviews(locationId, review_id, data).then(response =>{

      let parsedResult = JSON.parse(response.text);
    });
  };

}



function flattenArray(arr){

  let newArr = [];
  let newKeys = ["All Platforms"];

  try {
   for (var key in arr){

      newKeys.push(key);

      if (arr[key].length > 0) {

        arr[key].forEach((item) => {

          item["website"] = key;
          newArr.push(item);

        });
      }

    }

  }catch(e){


  }
  return {website :newKeys, reviews : newArr };

}
