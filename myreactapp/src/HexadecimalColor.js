function numberList(start, end) {
  let range = [];
  for (let index = start; index < end; index++) {
    range.push(index);
  }

  return range;
}

const Square = () => {
  let color = hexaColor();

  let squareStyle = {
    backgroundColor: color,
    padding: 10,
    width: 50,
    height: 50,
    margin: 1,
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={squareStyle}>
      <p>{color}</p>
    </div>
  );
};

function hexaColor() {
  let values = "0123456789abcdef";
  let color = "";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * values.length);
    color += values[index];
  }
  return "#" + color;
}

function ColorApp() {
  const list = numberList(0, 32);

  const colorsSquare = list.map((element) => <Square />);

  let outStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  return <div style={outStyle}>{colorsSquare}</div>;
}

 export default ColorApp;
