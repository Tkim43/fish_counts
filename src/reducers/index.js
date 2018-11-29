import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import boatReducer from './boat_reducer';
import fishcountReducer from './fishcount_reducer';
import landingcountReducer from './landingcount_reducer';
import timeReducer from './time_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    boat: boatReducer,
    fishcountReducer: fishcountReducer,
    landingcountReducer: landingcountReducer,
    timeReducer: timeReducer,
    user: userReducer
})

export default rootReducer;