import "./App.css";
import "./index.css";

import {
  Routes,
  Route,
} from "react-router-dom";
import Pictionary from "./components/Pictionary";
import Home from "./components/Home";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Pictionary />} />
    </Routes>
    </div>
  );
}

export default App;
