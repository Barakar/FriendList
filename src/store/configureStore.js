import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../containers/DevTools';
import { combineReducers } from 'redux';  
import * as friends from '../reducers';

const reducer = combineReducers(friends);  

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducer, initialState, DevTools.instrument());

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}