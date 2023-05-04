import React from "react";

const options = [
  { value: "", label: "--select country---" },
  { value: "Finland", label: "Finland" },
  { value: "Saudi", label: "Saudi" },
  { value: "England", label: "England" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "India", label: "India" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "USA", label: "USA" },
];

const selectionOptions = options.map(({ value, label }) => (
  <option value={value}>{label}</option>
));
class MultipleInputForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.targert;
    if (type === "checkox") {
      this.setState({ skills: { ...this.state.skills, [name]: checked } });
    } else if (type === "file") {
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <div>
        <select>{selectionOptions}</select>
      </div>
    );
  }
}

export default MultipleInputForm;
