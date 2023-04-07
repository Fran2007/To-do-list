import { useState, useReducer } from "react";

const Tasks = [];

const reducer = (state, action) => {
	switch (action.type) {
		case "Add":
			return [...state, action.payload];
		case "Delete":
			return state.filter(index => index === action.payload);
		default:
			throw new Error();
	}
};

export function Tasklist() {
	const [state, dispatch] = useReducer(reducer, Tasks);
	const [newTask, setNewTask] = useState("");
	const [newDate, setNewDate] = useState("");
	const [message, setMessage] = useState("");

	const addToDo = () => {
		switch (true) {
			case !newDate && !newTask:
				setMessage("Required task");
				break;
			case newDate:
				setMessage("Save successfully");
				break;
			default:
				break;
		}

		dispatch({ type: "Add", payload: `${newTask} ${newDate}` });
		setNewTask("");
		setNewDate("");
	};

	const deleteTask = index => {
		dispatch({ type: "Delete", pyload: index });
		setNewTask("");
		setNewDate("");
	};

	return (
		<>
			<label>
				<input
					placeholder='Add your task'
					type='text'
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
				/>
				<input
					type='date'
					value={newDate}
					onChange={e => setNewDate(e.target.value)}
				/>
				<button onClick={addToDo}>Add task</button>
				{message && <p>{message}</p>}
				<ul>
					{state.map((task, index) => (
						<li key={index}>
							{task}
							<button
								onClick={() => {
									deleteTask(index);
								}}
							>
								delete task
							</button>
						</li>
					))}
				</ul>
			</label>
		</>
	);
}
