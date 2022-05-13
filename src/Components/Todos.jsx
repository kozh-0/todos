import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { checkboxHandler, deleteTodo } from "../Redux/Todos/TodoActions";
import { selectVisibleTodos } from "../Redux/Todos/TodoSelector";

export default function Todos() {
    const {filter} = useParams();
    const input = useSelector(state => state.todos.input);
    const todos = useSelector(state => selectVisibleTodos(state.todos.data, filter));

	const dispatch = useDispatch();

    return (
        <div>
            {todos.length ? todos.map((item, idx) => (
                <div key={item.id} className='todo_item' style={item.checked ? {opacity: .4} : {}}>
                    <input 
                        type="checkbox"
                        id={"checkbox" + (idx + 1)}
                        checked={item.checked}
                        onChange={() => dispatch(checkboxHandler(input, item.id))}
                    />
                    <label 
                        htmlFor={"checkbox" + (idx + 1)} 
                        className="text_block">
                        <h4 style={{paddingRight: '10px'}}>{(idx + 1)}) {item.text}</h4>
                    </label>
                    <button 
                        className="btn_delete"
                        onClick={() => dispatch(deleteTodo(input, item.id))}
                    ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Octicons-trashcan.svg/1200px-Octicons-trashcan.svg.png" alt="bin" /></button>
                </div>
            )) : (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
                    <h1>Type Something</h1> 
                    <img 
                        style={{width: '60px', marginLeft: '5px'}}
                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/upside-down-face_1f643.png" 
                        alt="emoji"/>
                 </div>)}
        </div>
)
}