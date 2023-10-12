import './Number.css'
const Number = ({ value, onClick }) => {
  //pass number value to calculator
  return (
    <div className="number"
      onClick={() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default Number;
