/* eslint-disable react/prop-types */

const Accordian = ({ id, title, description, handleToggle, isOpen }) => {
  return (
    <div className="accordian__wrapper">
      <div className="accordian__header" onClick={() => handleToggle(id)}>
        <h3 className="accordian__title">{title}</h3>
        <i className="accordian__icon">{isOpen ? "-" : "+"}</i>
      </div>
      {isOpen && <div className="accordian__body">{description}</div>}
    </div>
  );
};

export default Accordian;
