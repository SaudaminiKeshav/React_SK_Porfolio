import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Blog from "./Components/pages/Blog";
import Contact from "./Components/pages/Contact";
import HeaderComponent from "./Components/HeaderComponent"

function App() {
  return (
    <>
     <HeaderComponent />
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    </>

  );
}

export default App;
