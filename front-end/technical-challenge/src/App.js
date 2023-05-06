import Main from "./pages/MainPage"
import Deets from "./pages/PhoneDeets"
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/phones/:id" element={<Deets/>}/>
      </Routes>
    </div>
  );
}

export default App;
