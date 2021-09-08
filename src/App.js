import Home from "./components/pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Home />
    </Router>
  );
}

export default App;
