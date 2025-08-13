
import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
function App() {
 

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <h1>React Router Tutorial 7.8.0</h1>
    </>
  )
}

export default App
 