import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const configureStore=()=>{
  const middlewares=[
    thunk,
    sagaMiddleware
  ]
  const enhancers=[applyMiddleware(...middlewares)]
  const store=createStore(rootReducer, composeEnhancers(...enhancers))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
