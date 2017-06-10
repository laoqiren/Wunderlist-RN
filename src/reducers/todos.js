import * as types from '../constants/actionTypes';
import Utils from '../utils/index';

function getEndTime(hour){
    let dt = new Date();
    dt.setHours(hour?hour:(dt.getHours()+1));
    dt.setMinutes(0);
    return dt.getTime();
}

const initialState = {
    isFetchingAllTodos: false,
    sorts:['想看的电影','想看的书','想做的事','要写的项目'],
    data: [
        {
        id: Utils.GUID(),
        title: 'Make a todo!',
        endTime: getEndTime(),
        sort: 0,
        content: '我是一只想要飞得更高的鸟儿',
        addr: '中国杭州',
        completedTime: 0,
        completed: false
        },
        {
        id: Utils.GUID(),
        title: 'Complete a todo!',
        sort: 1,
        content: '我是一只想要飞得更高的鸟儿，飞呀飞呀',
        addr: '中国重庆',
        endTime: getEndTime(),
        completedTime: 0,
        completed: false
        }
    ]
}
export default function todos(state=initialState,action){
    switch(action.type){
        case types.START_FETCH_ALL_TODOS:
            return Object.assign({},state,{isFetchingAllTodos:true});
        case types.FETCH_ALL_TODOS:
            return Object.assign({},state,{
                isFetchingAllTodos:false,
                data: action.data.reduce((pre,cur)=>{
                    !(pre.id === cur.id) && pre.push(cur);
                    return pre;
                },[...state.data])
            });
        case types.ADD_TODO:
            return Object.assign({},state,{
                data:[
                    {
                        id: Utils.GUID(),
                        title: action.title,
                        sort: action.sort,
                        content: action.content,
                        addr: action.addr,
                        endTime: getEndTime(action.hour),
                        completed: false
                    },
                    ...state.data
                ]
            });
        case types.DELETE_TODO:
            return Object.assign({},state,{
                data: state.data.filter(todo=>todo.id!==action.id)
            });
        case types.COMPLETE_TODO:
            return Object.assign({},state,{
                data: state.data.map(todo=>{
                    let now = new Date().getTime();
                    if(todo.id === action.id && (new Date(todo.endTime).getTime() - now)){
                        return Object.assign({},todo,{
                            completed: !todo.completed,
                            completedTime: now
                        })
                    }
                    return todo;
                })
            });
        case types.EDIT_TODO:
            return Object.assign({},state,{
                data: state.data.map((todo)=>
                    todo.id === action.id?Object.assign({},todo,{
                        title: action.title,
                        endTime: getEndTime(action.hour),
                        sort: action.sort
                    }):todo
                )
            });
        case types.ADD_LIST:
            return Object.assign({},state,{
                sorts: [...state.sorts,action.name]
            })
        default:
            return state;
    }
}