import {Routes,Route, BrowserRouter} from "react-router-dom"
import LandingPage from "./components/LandingPage";
import Transactions from "./components/Transactions";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/sample" element={<LandingPage/>} />
      <Route exact path="/" element={<Transactions/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
