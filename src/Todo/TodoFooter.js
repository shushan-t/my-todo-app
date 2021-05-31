import store from '../Store/store';
import { removeCompleted } from '../Action/actions'


function TodoFooter(){
    const todoList = store.getState();
    const size = todoList.filter((todo)=>todo.isCompleted).length;
        
    return (
        <div className = "add-todo-wrapper">
                <span>{size}/{todoList.length} Completed</span>
                <button onClick= { () => store.dispatch({...removeCompleted})}>Clear Completed</button>
        </div>
    );
}

export default TodoFooter;