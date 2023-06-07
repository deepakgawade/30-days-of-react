import React from "react";

class UncontrolledInputForm extends React.Component {
  firstname = React.createRef;
  lastname = React.createRef;
  email = React.createRef;
  phoneNumer = React.createRef;
  state = { gender: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      firstName: this.firstname.current.value,
      lastName: this.lastName.current.value,
      email: this.email.current.value,
      phoneNumer: this.phoneNumer.current.value,
    };
    console.log(data);
  };

  //   checkHandleChange=(e)=>{
  //     e.preventDefault();

  //   };

  handleChange = (e) => {
    /*
     we can get the name and value like: e.target.name, e.target.value
    Wwe can also destructure name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target;
    /*
    [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    */

    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    const { gender } = this.state;
    return (
      <div className="App">
        <h3>Add a Student</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            ref={this.firstname}
            onChange={this.onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="last Name"
            name="lastName"
            ref={this.lastname}
            onChange={this.onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            name="Email"
            ref={this.email}
            onChange={this.onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            ref={this.phoneNumer}
            onChange={this.onChange}
          />
        </div>
        <div>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={this.handleChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={this.handleChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
    );
  }
}

export default UncontrolledInputForm;
