import { useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian.jsx";

const ACCORDIAN_DATA = [
  {
    id: 1,
    title: "Accordian 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
    isOpen: false,
  },
  {
    id: 2,
    title: "Accordian 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
    isOpen: false,
  },
  {
    id: 3,
    title: "Accordian 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
    isOpen: false,
  },
  {
    id: 4,
    title: "Accordian 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis quidem illum sed, molestiae nulla eaque harum vitae? Cupiditate, animi?",
    isOpen: false,
  },
];

function App() {
  const [accordians, setAccodians] = useState(ACCORDIAN_DATA);

  const handleToggle = (id) => {
    const updatedChecked = [...accordians];

    updatedChecked.forEach((ele) => {
      if (ele.id === id) {
        ele.isOpen = true;
      } else {
        ele.isOpen = false;
      }
    });
    setAccodians(updatedChecked);
  };
  return (
    <div className="container">
      {accordians.map((accordian) => (
        <Accordian
          key={accordian.id}
          id={accordian.id}
          title={accordian.title}
          description={accordian.description}
          isOpen={accordian.isOpen}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default App;
