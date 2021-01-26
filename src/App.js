import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Emptyhome from "./components/home/Emptyhome";
import Sidebar from "./components/common/sidenav/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Emptyhome />
      </Router>
    </>
  );
}
export default App;
