import React from "react";
import "./Bio.css";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date}, ${year}`;
};

//user card

const imageStyle = { width: 100, height: 100 ,borderRadius:50};
const UserCard = ({ user: { firstName, lastName, image } }) => {
  //  console.log(firstName);
  return (
    <div>
      <img src={image} style={imageStyle} alt={firstName} />
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  );
};

//button component
const Button = ({ text, onClick, style }) => (
  <button onClick={onClick} style={style}>
    {text}
  </button>
);

const buttonStyle = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

//header
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);

    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header style={this.props.style}>
        <div>
          <h1>{welcome}</h1>
          <h1>{title}</h1>
          <h1>{subtitle}</h1>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyle} />
      <Button text="-1" onClick={minusOne} style={buttonStyle} />
    </div>
  </div>
);

//tech list

class TechList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((element) => (
      <li key={element}>{element}</li>
    ));
    return techsFormatted;
  }
}

//main components
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props;

    return (
      <main>
        <div>
          <p>Prerequisites to get started react.js</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyle}
          />
          <Button text="Show Time" onClick={handleTime} style={buttonStyle} />
          <Button
            text="change background"
            onClick={changeBackground}
            style={buttonStyle}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    );
  }
}

//footer
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer">
        <div>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}
class Bio extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
    },
  };

  //show date
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };

  //addOne
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //minusOne
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  //handelTime
  handleTime = () => {
    alert(this.showDate(new Date()));
  };

  greetPeople = () => {
    alert("Welcome to 30 datys of React Challange,2023");
  };
  //change background
  changeBackground = () => {
    this.state.styles.backgroundColor === "#0F172A"
      ? this.setState({
          styles: { backgroundColor: "#FFFFFF", color: "#0D1117" },
        })
      : this.setState({
          styles: { backgroundColor: "#0F172A", color: "#FFFFFF" },
        });
  };

  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "Javascript Library",
      author: { firstName: "Deepak", lastName: "Gawade" },
      date: "Apr 29, 2023",
    };
    const techs = ["HTML", "CSS", "JavaScript"];
    const date = new Date();

    const user = {
      ...data.author,
      image:
        "https://media.licdn.com/dms/image/D5603AQElgByHokMLcw/profile-displayphoto-shrink_200_200/0/1677731036580?e=1687996800&v=beta&t=gNS1v0fhFTsw4mDwnSMQBDNLPbS0eIpO9pizvCf1b88",
    };
    var mainStyle = {
      backgroundColor: this.state.styles.backgroundColor,
      color: this.state.styles.color,
      padding: 20,
    };
    return (
      <div style={mainStyle}>
        <p>{this.state.styles.backgroundColor}</p>
        <Header data={data} />
        <div className="divider"></div>
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <div className="divider"></div>
        <Footer date={date} />
      </div>
    );
  }
}

export default Bio;
