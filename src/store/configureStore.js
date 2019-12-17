/* global window:true */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./../reducers/";
import sagasManager from "./../utils/sagasManager";

const sagaMiddleware = createSagaMiddleware();
let composeEnhancers = compose;
if (window) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore(initialState) {
  let finalCreateStore;
  finalCreateStore = composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);
  sagaMiddleware.run(sagasManager.getRootSaga());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers/", () => {
      const nextReducer = reducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
