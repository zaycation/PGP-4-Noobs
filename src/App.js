import { BrowserRouter as Router, Route } from "react-router-dom";

//import MainNavbar from "./components/MainNavbar";

import HomeScreen from "./screens/HomeScreen";

import "bootswatch/dist/flatly/bootstrap.min.css"; // Added this :boom:
import "./App.css";

const App = () => {
  return (
    <Router>
      <main className="py-3">
        <Route path="/" component={HomeScreen} exact />
      </main>
    </Router>
  );
};

export default App;
