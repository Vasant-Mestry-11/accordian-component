/* eslint-disable react/prop-types */

const Accordian = ({ id, title, description }) => {
  return (
    // <div className="accordian__wrapper">
    //   <div className="accordian__header" onClick={() => handleToggle(id)}>
    //     <h3 className="accordian__title">{title}</h3>
    //     <i className="accordian__icon">{isOpen ? "-" : "+"}</i>
    //   </div>
    //   {isOpen && <div className="accordian__body">{description}</div>}
    // </div>

    <div className="accordian">
      <input
        type="checkbox"
        name="accordian-title"
        className="accordian-checkbox"
        id={`accordian-title-${id}`}
      />
      <label
        htmlFor={`accordian-title-${id}`}
        className="accordian-title-label"
      >
        {title}
        <i className="icon"></i>
      </label>
      <div className="accordian-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordian;
