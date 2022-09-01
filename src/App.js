import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component Imports
import Home from "../src/components/search/Home.jsx";
import SearchResults from "./components/results/SearchResults";


function App() {
  return (
    <BrowserRouter>
      <>

        <Routes>

          {/* Main Pages */}
          <Route path="/" component={<Home />} element={<Home />}></Route>
          <Route path="/results/" component={<SearchResults />} element={<SearchResults />}></Route>
          {/* End of Main Pages */}

        </Routes>

      </>
    </BrowserRouter>
  );
}

export default App;
