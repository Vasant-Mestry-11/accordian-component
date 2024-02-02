/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordian = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordian = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className="accordian__wrapper">
      <div className="accordian__header" onClick={toggleAccordian}>
        <h3 className="accordian__title">{title}</h3>
        <i className="accordian__icon">{open ? "-" : "+"}</i>
      </div>
      {open && <div className="accordian__body">{description}</div>}
    </div>
  );
};

export default Accordian;
