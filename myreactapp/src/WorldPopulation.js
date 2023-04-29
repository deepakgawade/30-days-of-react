import "./WorldPopulation.css";

const populationData = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

function WorldPopulation() {
  //const countries=[{count}]

  const populationList = populationData.map((element) => (
    <PopulationBar key={element.country} d={element} />
  ));

  return (
    <div className="main">
      <div className="title">30 days of react</div>
      <div className="title">World Population</div>
      <div className="subtitle">10 most populated countries</div>
      {populationList}
    </div>
  );
}

const PopulationBar = (props) => {
  let barColor = "#FFA500";
  var barWidth = 200;

  let barStyle = {
    backgroundColor: barColor,
    width: barWidth,
  };
  const total = populationData[0].population;
  let num = props.d.population;
  console.log(num);
  barWidth = widthScale(props.d.population / total);
  console.log(barWidth);
  barStyle = {
    backgroundColor: barColor,
    width: barWidth,
    borderRadius: 5,
  };

  let barsOuterStyle = { width: 900, display: "flex", margin: 5 };

  return (
    <div className="bar-group">
      <p className="country-label">{props.d.country}</p>
      <div style={barsOuterStyle}>
        <div style={barStyle}></div>
      </div>
      <p className="population-label">{props.d.population}</p>
    </div>
  );
};

function widthScale(number) {
  return number * 1000;
}

export default WorldPopulation;
