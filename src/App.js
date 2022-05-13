import { useDispatch, useSelector } from "react-redux";
import { addTodo, inputHandler } from "./Redux/Todos/TodoActions";


import Todos from "./Components/Todos";
import Filters from "./Components/Filters";


export default function App() {

	const input = useSelector(state => state.todos.input);
	const dispatch = useDispatch();
	


  	return (
		<main className="main">
			<div className="top">
				<h2>Todos</h2>
				<input 
					autoFocus
					label="Todo" 
					type="text" 
					value={input}
					onChange={(e) => dispatch(inputHandler(e.target.value))}
					onKeyDown={(e) => {if (e.key === 'Enter') dispatch(addTodo(input))}}
				/>
				<button 
					onClick={() => dispatch(addTodo(input))}
				>Add Todo</button>
			</div>
			<Filters/>
			<Todos/>
		</main>
  	);
}

