import changeNumber from './upDown';
import multNumber from './multDiv';

import {combineReducers} from 'redux';
const rootReducer =combineReducers({
    changeNumber,
    multNumber
})
export default rootReducer;