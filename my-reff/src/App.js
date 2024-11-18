
// import Functional_comp from "./Components/Functional_comp";
// import Nojsx from "./Components/Nojsx";
// import Props from "./Components/Props";
// import State from "./Components/State";
import './App.css';
import Conditionalrendering from './Components/Conditionalrendering';
// import Methodsasprops1 from "./Components/Methodsasprops1";

function App() {
  return (
    <div className="App">
      hello world
      {/* <Functional_comp />
      <Nojsx/>
      <Props name="DIANA"/>
      <Props name="ROMEO"/>
      <Props name="ROCK"/> */}
      {/* <State/> */}
      {/* <Methodsasprops1/> */}
      <Conditionalrendering  isLoggedIn={true}/>
    </div>
  );
}

export default App;
