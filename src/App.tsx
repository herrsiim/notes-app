import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"

function App() {
	return <Routes>
		<Route path="/" element={<h1>Hi</h1>}></Route>
		<Route path="/new" element={<h1>New</h1>}></Route>
	</Routes>
}

export default App