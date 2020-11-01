import logo from './logo.svg';
import './App.css';

import HeaderComponent from "./Components/HeaderComponent"
import BodyComponent from "./Components/BodyComponent"

function App() {
  return (
    <div className="App">
      <header>
      <HeaderComponent />
     <BodyComponent />
      </header>
    </div>
  );
}

export default App;
