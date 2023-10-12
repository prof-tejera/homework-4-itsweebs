const Operation = ({ value, onClick }) => {
  //pass operation value to calculator
  return (
    <div
      onClick = {() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default Operation;
