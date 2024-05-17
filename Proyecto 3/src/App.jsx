import NavBar from "./Components/NavBar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Public from "./Routes/Public.jsx";
import Container from "react-bootstrap/Container";
import AuthProvider from "./Context/AuthContext.jsx";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <NavBar />
          <Container>
            <Public />
          </Container>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

