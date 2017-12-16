import {GET_LOCATIONS} from "../action/actionConstants";

export default function search( state = "", action) {

  switch (action.type) {

    case GET_LOCATIONS: {

      return action.payload;
    }

    default:
      return state;
  }
}
