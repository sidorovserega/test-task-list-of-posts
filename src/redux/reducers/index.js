import { combineReducers } from 'redux';
import filters from './filters';
import posts from './posts';
import users from './users';
import comments from './comments';

const rootReduser = combineReducers({
  filters, 
  posts,
  users,
  comments
});

export default rootReduser;