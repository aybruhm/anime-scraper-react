import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">

          <Routes>

            {/* Main Pages */}
            {/* <Route path="/" component={<Home />} element={<Home />}></Route> */}
            {/* End of Main Pages */}

          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
