import { Button, Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { checkboxHandler, deleteTodo } from "../Redux/Todos/TodoActions";
import { selectVisibleTodos } from "../Redux/Todos/TodoSelector";


export default function Todos() {

    const input = useSelector(state => state.todos.input);
    const activeFilter = useSelector(state => state.filter);
    const todos = useSelector(state => selectVisibleTodos(state.todos.data, activeFilter));
    

	const dispatch = useDispatch();

    return (
        <div>
            {todos.map((item, idx) => (
                
                <div key={item.id} className='todo_item'>
                    <Checkbox 
                        color="success"
                        type="checkbox" 
                        checked={item.checked}
                        onChange={() => dispatch(checkboxHandler(input, item.id))}
                    />
                    <h4 style={{paddingRight: '10px'}}>{idx + 1}) {item.text}</h4>
                    <Button 
                        variant="contained" 
                        color="error"
                        size="small"
                        onClick={() => dispatch(deleteTodo(input, item.id))}
                    >Delete</Button>
                </div>
            ))}
        </div>
    )
}