import Sidebar from "./components/Sidebar/Sidebar.jsx";
import './App.css';
import { Outlet } from "react-router-dom";function App() {
  return (
    <>
        <Sidebar/>
        <Outlet/>
    </>
  )
}

export default App
