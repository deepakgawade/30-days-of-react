import React, { Component } from "react";

class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  };

  handelChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const options = [
      { value: "", label: "--select country---" },

      {
        value: "Finland",
        label: "Finland",
      },
      {
        value: "Sweden",
        label: "Sweden",
      },
      {
        value: "Norway",
        label: "Norway",
      },
      {
        value: "Denmark",
        label: "Denmark",
      },
    ];

    const seletOptions = options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));

    const { firstName, lastName, title, country } = this.state;
    return (
      <div>
        <h3>Add Employee</h3>
        <form onSubmit={this.handelSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handelChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handelChange}
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={country}
              onChange={this.handelChange}
            />
          </div>
          <div>
            {" "}
            <select name="countryoption" id="countryoption">
              {seletOptions}
            </select>
          </div>

          <button className="btn btn-success">Submit</button>
        </form>

        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}

export default Forms;
