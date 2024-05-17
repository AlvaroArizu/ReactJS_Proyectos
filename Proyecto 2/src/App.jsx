import NavBar from "./Components/NavBar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Public from "./Routes/Public.jsx";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Public />
      </Router>
    </>
  );
}
export default App;
