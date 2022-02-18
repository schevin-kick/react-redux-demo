import { combineReducers } from 'redux';
import step1 from './step1Reducer';
import step2 from './step2Reducer';

const reducers = combineReducers({
    step1,
    step2
});

export default reducers;