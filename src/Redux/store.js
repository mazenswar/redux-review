import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import tweetReducer from './tweetsReducer';

const reducers = combineReducers({
  user: reducer,
  tweets: tweetReducer
});
export default createStore(reducers, applyMiddleware(thunk));
