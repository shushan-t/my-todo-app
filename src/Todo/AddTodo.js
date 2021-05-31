import {addTodo} from '../Action/actions';
import store from '../Store/store';
import { useState } from 'react';

const AddTodo = () => {
    const [addValue, setAddValue] = useState("");
    const addTodoItem = () => {
        if(!addValue.length) return;
        store.dispatch({...addTodo, payload: addValue});
        setAddValue("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem();
    }
    return ( 
        <form className = "add-todo-wrapper"
        onSubmit = {handleSubmit}>
            <input placeholder="What needs to be dones" onChange = {(e) => setAddValue(e.target.value)} value = {addValue}></input>
            <button onClick = {addTodoItem}>Add</button>
        </form>
     );
}
 
export default AddTodo;