import "./Main.scss"
import Sidebar from "../Sidebar"
import { Routes, Route } from "react-router-dom"
import Cotton from "./Cotton"
import Lab1 from "../../labs/Lab1"
import Lab2 from "../../labs/Lab2"

function Main() {
	return (
		<main className="main">
			<div className="bar">
				<Sidebar />
			</div>
			<div className="content">
				<Routes>
					<Route path="/" element={<Cotton />} />
					<Route path="/Лаб-1" element={<Lab1 />} />
					<Route path="/Лаб-2" element={<Lab2 />} />
				</Routes>
			</div>
		</main>
	)
}

export default Main
