import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Settings, Home } from "./pages";
import { Layout, LoginForm } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/logIn" element={<LoginForm />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
