const Operation = ({ value, onClick }) => {
  //pass operation value to calculator
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

export default Operation;
