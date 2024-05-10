// store.js

import { createStore, combineReducers } from 'redux';
import {formValueSelector, reducer as reduxFormReducer} from 'redux-form'
const reducer  = combineReducers({
    form: reduxFormReducer,
});
const store = (window.devtoolsExtension 
    ? window.devtoolsExtension()(createStore):createStore)(reducer);

export default store;
