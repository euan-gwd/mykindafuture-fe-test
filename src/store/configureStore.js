import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { loadShips } from './actions'
import thunk from 'redux-thunk'

const configureStore = () => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true
        })
      : compose

  const enhancer = composeEnhancers(applyMiddleware(thunk))

  const store = createStore(rootReducer, enhancer)

  store.dispatch(loadShips())

  return store
}

export default configureStore
