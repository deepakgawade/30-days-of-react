function Number() {
  let currentYear = 2020;
  let birthYear = 1970;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  return (
    <div className="app">
      <Age age={age} />
      <Weight weight={mass * gravity} />
    </div>
  );
}

export default Number;

const Age = (props) => <div> The person is {props.age} years old.</div>;

const Weight = (props) => (
  <p> The weight of the object on earth is {props.weight}N.</p>
);
