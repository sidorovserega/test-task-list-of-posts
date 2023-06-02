import { combineReducers } from 'redux';
import filters from './filters';
import posts from './posts';
import users from './users';

const rootReduser = combineReducers({
  filters, 
  posts,
  users
});

export default rootReduser;