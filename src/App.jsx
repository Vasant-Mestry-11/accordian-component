import "./App.css";
import Accordian from "./components/Accordian.jsx";

const ACCORDIAN_DATA = [
  {
    id: 1,
    title: "Accordian 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
  },
  {
    id: 2,
    title: "Accordian 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
  },
  {
    id: 3,
    title: "Accordian 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
  },
  {
    id: 4,
    title: "Accordian 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
  },
];

function App() {
  return (
    <div className="container">
      {ACCORDIAN_DATA.map((accordian) => (
        <Accordian
          key={accordian.id}
          title={accordian.title}
          description={accordian.description}
        />
      ))}
    </div>
  );
}

export default App;
