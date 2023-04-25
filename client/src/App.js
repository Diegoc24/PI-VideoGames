import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import "./App.css"
import Detail from "./components/Detail";
import Form from "./components/Form";
import GameCreated from "./components/GameCreated";


function App() {
 
  return (
    <div className="App">
     
     <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home key={"home"}/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/formcreated" element={<Form/>}/>
        <Route path="/created" element={<GameCreated/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
