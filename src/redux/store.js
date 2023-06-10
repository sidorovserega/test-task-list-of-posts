import { applyMiddleware, createStore, compose } from 'redux';
import rootReduser from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
const store = createStore(
    rootReduser, 
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

export default store;

sagaMiddleware.run(rootWatcher);
