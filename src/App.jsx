import "./App.css";
import Accordian from "./components/Accordian.jsx";
import { ACCORDIAN_DATA } from "./constants/Accoridans.jsx";

function App() {
  return (
    <div className="container">
      {ACCORDIAN_DATA.map((accordian) => (
        <Accordian
          key={accordian.id}
          id={accordian.id}
          title={accordian.title}
          description={accordian.description}
        />
      ))}
    </div>
  );
}

export default App;
