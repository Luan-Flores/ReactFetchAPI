import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
	// const [count, setCount] = useState();

	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default App;
