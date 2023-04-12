const counteries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Pakistan", city: "Lahore" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Norway", city: "Oslo" },
];

const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{city}</h2>
    </div>
  );
};

const Countries = ({countries}) => {
  const countiresList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countiresList}</div>;
};

const CountryApp = () => (
  <div className="container">
    <div>
      <h1>List of countries</h1>
      <Countries countries={counteries} />
    </div>
  </div>
);

export default CountryApp;
