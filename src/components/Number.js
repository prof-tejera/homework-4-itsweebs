const Number = ({ value, onClick }) => {
  //pass number value to calculator
  return (
    <div
      onClick = {() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default Number;
