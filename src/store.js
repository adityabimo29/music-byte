import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import users from './redux/usersReducer';

export default createStore(
    combineReducers({users}),
    applyMiddleware(thunk,logger)
)
