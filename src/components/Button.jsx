import { useState } from "react";

function Button(props) {
	const [counter, setCounter] = useState(0);

	return (
		<button
			className="btn btn-white"
			onClick={() => {
				setCounter(counter + 1);
			}}
		>
			Press to increment {counter}
		</button>
	);
}

export default Button;
