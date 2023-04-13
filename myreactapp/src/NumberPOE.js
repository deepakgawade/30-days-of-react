function numberList( start, end ){
  let range = [];
  for (let index = start; index < end; index++) {
    range.push(index);
  }

  return range;
};

const numlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var j = 2;

function isPrime(n) {
  if (n === 0 || n === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

//const Age = (props) => <div> The person is {props.age} years old.</div>;
const Square = ({ number }) => {
  const bo = isPrime(number);
  console.log(bo);
  let text = "blue";
  let squareSTyle = {
    backgroundColor: text,
  };

  if (number % 2 == 0) {
    text = "green"; //"Even";
    if (number==2) {
      text = "yellow"; //"Prime";
    }
  } else {
    text = "red"; //"Odd";
    if (bo) {
      text = "yellow"; //"Prime";
    }
  }
  squareSTyle = {
    backgroundColor: text,
  };
  return (
    <div style={squareSTyle}>
      <h1>{number}</h1>
    </div>
  );
};



function NumberPOE() {
  console.log(numlist);
  const numlist2=numberList(0,32)
  console.log(numlist2);

  const squarelist = numlist2.map((e) =>(<><Square key={e} number={e} /><Square key={e} number={e} />
  <Square key={e} number={e} /></>) );



  return <div className="container">{squarelist}</div>;
}

export default NumberPOE;
