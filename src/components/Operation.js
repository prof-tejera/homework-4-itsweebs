import './Operation.css'

const Operation = ({ value, onClick }) => {
  //pass operation value to calculator
  return (
    <div className="operation"
      onClick={() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default Operation;
