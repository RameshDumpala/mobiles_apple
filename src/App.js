import logo from "./logo.svg";
import "./App.css";
import CountryName from "./Component/CountryName";
import Main from "./Component/Main";
import Value from "./Value";

function App() {
  return (
    <div className="app">
      <CountryName />
      {/* <Value/> */}
      <Main />
     
    </div>
  );
}

export default App;
