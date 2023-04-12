const numberList = ({ start, end }) => {
  let range = [];
  for (let index = start; index < end; index++) {
    range.push(index);
  }

  return range;
};

const numlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var j = 2;

function isPrime(n) {
  if (n == 0 || n == 1) {
    return false;
  }
  if (n == j) {
    return true;
  }
  if (n % j == 0) {
    return false;
  }
  j++;
  return isPrime(n);
}

//const Age = (props) => <div> The person is {props.age} years old.</div>;
const Square = ({ number }) => {
  const bo = isPrime(number);
  console.log(bo);
  let text = "";
  if (number % 2 === 0) {
    text = "Even";
    if (bo) {
      text = "Prime";
    }
  } else {
    text = "Odd";
    if (bo) {
      text = "Prime";
    }
  }
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

function NumberPOE() {
  console.log(numlist);

  const squarelist = numlist.map((e) => <Square key={e} number={e} />);

  return <div className="container">{squarelist}</div>;
}

export default NumberPOE;
