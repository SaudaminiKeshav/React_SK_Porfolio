import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Portfolio from "./Components/pages/Portfolio";
import Contact from "./Components/pages/Contact";

function App() {
  return (
    <>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    </>

  );
}

export default App;
