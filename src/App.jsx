import "./App.css";
import Joe from "./components/Joe.jsx";
import Gustavo from "./components/gustavo";
import Jarwend from "./components/jarwend";
import JuanCruz from "./components/juancruz";
import JuniorLopez from "./components/juniorlopez";

function App() {
  const x = 0;
  return (
    <main className="custom_main">
      <p>{x}</p>
      <Gustavo />
      <Jarwend />
      <Joe />
      <JuanCruz />
      <JuniorLopez />
    </main>
  );
}

export default App;
