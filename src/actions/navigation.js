import * as types from '../constants/actionTypes';

export function switchMainTab(index){
    return {
        type: types.SWITCH_MAIN_TAB,
        index
    }
}