import * as types from '../constants/actionTypes';
import * as APIs from '../constants/serverAPIs';

function shouldFetchTodos(state){
    const data = state.todos;
    if(data && data.isFetchingAllTodos){
        return false;
    }
    return true;
}

export function fetchAllTodos(){
    return async function(dispatch,getState){
        if(!shouldFetchTodos(getState())){
            Promise.resolve();
        }
        dispatch({type:types.START_FETCH_ALL_TODOS});
        let data = await storage.getAllDataForKey('todos') || [];
        dispatch({
            type:types.FETCH_ALL_TODOS,
            data
        });
    }
}

export function addTodo(title,hour,sort,content,addr){
    return {
        type: types.ADD_TODO,
        title,
        hour,
        sort,
        content,
        addr
    }
}

export function deleteTodo(id){
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function editTodo(id,title,hour,sort,content,addr){
    return {
        type: types.EDIT_TODO,
        title,
        hour,
        id,
        sort,
        content,
        addr
    }
}

export function completeTodo(id){
    return  {
        type: types.COMPLETE_TODO,
        id
    }
}

export function addList(name){
    return {
        type: types.ADD_LIST,
        name
    }
}