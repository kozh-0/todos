import { useDispatch, useSelector } from "react-redux";
import { addTodo, inputHandler } from "./Redux/Todos/TodoActions";

import Todos from "./Components/Todos";
import Filters from "./Components/Filters";
import { Button, TextField } from "@mui/material";

export default function App() {

	const input = useSelector(state => state.todos.input);
	const dispatch = useDispatch();

	console.log(useSelector(state => state));

	const handler = (e) => {
		dispatch(inputHandler(e.target.value))
	}

  	return (
		<main className="main">
			<div className="App">
				<h2>Redux Todos</h2>
				<TextField 
					label="Todo" 
					id="outlined-basic" 
					color="warning" 
					type="text" 
					value={input}
					onChange={(e) => handler(e)}
					onKeyDown={(e) => {if (e.key === 'Enter') dispatch(addTodo(input))}}
				/>
				<Button 
					variant="contained" 
					color="success"
					size="large"
					onClick={() => dispatch(addTodo(input))}
				>Add Todo</Button>
			</div>
			<Filters/>
			<Todos/>
		</main>
  	);
}

