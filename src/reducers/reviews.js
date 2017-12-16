import {GET_REVIEWS} from "../action/actionConstants";

export default function search( state = "", action) {

  switch (action.type) {

    case GET_REVIEWS: {

      return action.payload;
    }

    default:
      return state;
  }
}
