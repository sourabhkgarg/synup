import request from 'superagent';


const baseUrl = "https://front-end-interview.herokuapp.com";

const apiKey = "57bcd0b952bd639187304d1ba0175048b1a85b58";



class api {


  static fetchLocations() {
    return new Promise((resolve, reject) => {
      request.get(baseUrl + '/candidate/'+apiKey+'/locations.json').
      set('Accept', 'application/json').end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }


  static fetchReviews(locationId) {
    return new Promise((resolve, reject) => {
      request.get(baseUrl + '/candidate/'+apiKey+'/locations/'+locationId+'/reviews.json').
      set('Accept', 'application/json').end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }

  static postReviews( locationId, review_id, data) {
    return new Promise((resolve, reject) => {
      request.post(baseUrl + '/candidate/'+apiKey+'/location/'+ locationId + '/reviews/'+ review_id +  '.json').
        send(data).
        set('Accept', 'application/json').end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }


}



export default api;
