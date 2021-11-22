import { useReducer } from "react";

function CountReducer() {
	const initialState = {
		count: 0,
		user: [],
		numbers: 100,
		isAdmin: false,
	};

	function reducer(state, action) {
		switch (action.type) {
			case "INCREMENT":
				return {
					...state,
					count: state.count + 1,
				};
				break;
			case "DECREMENT":
				return {
					...state,
					count: state.count - 1,
				};
				break;
			default:
				return state;
		}
	}

	const [state, despatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1>this is counter</h1>
			<h1>{state.count}</h1>
			<button onClick={() => despatch({ type: "INCREMENT" })}>
				increase
			</button>
			<button onClick={() => despatch({ type: "DECREMENT" })}>
				decrease
			</button>
		</div>
	);
}

export default CountReducer;

// function countReducer() {
// 	const [state, despatch] = useReducer(reducer, initialState);

// 	const initialState = {
// 		count: 0,
// 		user: [],
// 		numbers: 100,
// 		isAdmin: false,
// 	};

// 	function reducer(state, action) {
// 		switch (action.type) {
// 			case "INCREMENT":
// 				return {
// 					...state,
// 					count: state.count + 1,
// 				};
// 				break;
// 			case "DECREMENT":
// 				return {
// 					...state,
// 					count: state.count - 1,
// 				};
// 				break;
// 			default:
// 				return state;
// 		}
// 	}

// 	return (
// 		<div>
// 			<h1>this is counter</h1>
// 			<h1>{state.count}</h1>
// 			<button onClick={() => despatch({ type: "INCREMENT" })}>
// 				increase
// 			</button>
// 			<button onClick={() => despatch({ type: "DECREMENT" })}>
// 				decrease
// 			</button>
// 		</div>
// 	);
// }

// export default countReducer;
