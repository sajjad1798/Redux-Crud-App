
import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootRoducer from './reducers/index'


// action 

const store = createStore(rootRoducer , composeWithDevTools());

export default store;
