import {SELECT_LOCATION} from "../action/actionConstants";

export default function search( state = "", action) {

  switch (action.type) {

    case SELECT_LOCATION: {

      return action.payload;
    }

    default:
      return state;
  }
}
