import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component Imports
import Home from "../src/components/search/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          {/* Main Pages */}
          <Route path="/" component={<Home />} element={<Home />}></Route>
          {/* End of Main Pages */}

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
