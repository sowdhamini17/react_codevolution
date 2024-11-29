
// import Functional_comp from "./Components/Functional_comp";
// import Nojsx from "./Components/Nojsx";
// import Props from "./Components/Props";
// import State from "./Components/State";
// import './App.css';
// import Conditionalrendering from './Components/Conditionalrendering';
// import Listrendering from './Components/Listrendering';
// import Inlinecss from './Components/Inlinecss';
// import Stylesheet from './Components/Stylesheet';
// import Methodsasprops1 from "./Components/Methodsasprops1";
// import "./Components/error.css";

// import styles from './Components/appstyles.module.css'; // For CSS modules
import Cntroledcomp from './Components/Cntroledcomp';



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
      {/* <Conditionalrendering  isLoggedIn={true}/> */}
      {/* <Listrendering/> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <Inlinecss/> */}
      {/* <h1 className='error'>error</h1>
      <h1 className={styles.success}>success</h1> */}
      <Cntroledcomp/>
    </div>
  );
}

export default App;
