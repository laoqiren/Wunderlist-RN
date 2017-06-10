import {applyMiddleware,createStore,compose} from 'redux';
import {AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/index';
import devTools from 'remote-redux-devtools';
import { Platform } from 'react-native';
import {persistStore,autoRehydrate} from 'redux-persist'

let middleWares = compose(applyMiddleware(thunk,logger),autoRehydrate());

export default function(){
    const store = createStore(reducers,undefined,middleWares);
    persistStore(store,{storage: AsyncStorage});
    return store;
}