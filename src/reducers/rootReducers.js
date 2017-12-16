import {combineReducers} from 'redux';
import Settings from './settings';
import ViewPort from './viewport';
import Locations from './locations';
import Reviews from './reviews';
import SelectedLocation from './selectedLocation';



const rootReducers = combineReducers({
  ViewPort ,  Settings , Locations , Reviews, SelectedLocation

});


export default rootReducers;
