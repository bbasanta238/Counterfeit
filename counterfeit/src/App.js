// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import AboutComp from "./components/AboutComp";
function App() {
	return (
		<>
			<Router>
				<NavbarComp />
        <Routes>
            {/* <Route path="/" element={<App/>}/> */}
            <Route path="/about" element={<AboutComp/>}/>
        </Routes>
			</Router>
		</>
	);
}

export default App;
