
import Functional_comp from "./Components/Functional_comp";
import Nojsx from "./Components/Nojsx";
import Props from "./Components/Props";
import State from "./Components/State";
import './App.css';

function App() {
  return (
    <div className="App">
      hello world
      <Functional_comp />
      <Nojsx/>
      <Props name="DIANA"/>
      <Props name="ROMEO"/>
      <Props name="ROCK"/>
      <State/>
    </div>
  );
}

export default App;
