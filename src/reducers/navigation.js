import * as types from '../constants/actionTypes';
import {NavigationActions} from 'react-navigation';
import {AppNavigator} from '../containers/App';

const initialNavState = {
    index: 1,
    routes: [
        {key: 'InitB',routeName: 'Completed'},
        {key: 'InitA',routeName: 'Home'}
    ]
}

export default function(state=initialNavState,action){
    
    switch(action.type) {
        case 'Login':
            return AppNavigator.router.getStateForAction(NavigationActions.back(),state);
        case 'Logout':
            return AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'Completed'}),state)
        default:
            return AppNavigator.router.getStateForAction(action,state) || state;
    }
}
