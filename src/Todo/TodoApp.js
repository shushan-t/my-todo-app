import TodoList from './TodoList';
import '../Style/todoApp.css';
import AddTodo from './AddTodo';
import TodoFooter from './TodoFooter';




const TodoApp = () => {
    return(
        <div className = "container">
            <AddTodo />
            <TodoList />
            <TodoFooter />
        </div>
    )
}

export default TodoApp;
