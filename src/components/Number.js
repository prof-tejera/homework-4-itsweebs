const Number = ({ value, onClick }) => {
  //pass number value to calculator
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
      }}
      onClick = {() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default Number;
