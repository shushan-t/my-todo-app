import store from '../Store/store';
import { toggleTodo, removeTodo } from '../Action/actions'

const TodoList = () => {
    const todoList = store.getState();

    return (
        <div className = "todoList-wrapper">
            {todoList.map(todo =>
                <div key={todo.id}
                    className="todo-wrapper"
                >
                    <div
                        className={`checkmark-wrapper ${todo.isCompleted ? "checked" : ""}`}
                        onClick = { () => store.dispatch({...toggleTodo, payload: todo.id})}
                        ></div>
                    <div 
                        className={`todo-text ${todo.isCompleted ? "todo-text-checked" : ""}`}
                    >
                        {todo.text}
                    </div>
                    <div 
                        className = "remove-btn"
                        onClick = { () => store.dispatch({...removeTodo, payload: todo.id})}
                    >
                       x
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoList;