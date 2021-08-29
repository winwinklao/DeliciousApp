import {ADD_TODO , DELETE_TODO , EDIT_TODO} from '../actions/types'

const initalState = {
  todoList:[]
}

const todoReducer=(state=initalState , action)=>{
  switch(action.type){
    case ADD_TODO :  
    return {
      ...state , todoList:state.todoList.concat({
        key:Math.random(),
        name:action.todo,
        selected:action.selected
      })
    }
    default :
      return state ;
  }
}
export default todoReducer ;