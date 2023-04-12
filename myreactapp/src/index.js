import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Number from "./Number";
import reportWebVitals from "./reportWebVitals";
import CountryApp from "./newLetter";
import NumberPOE from "./NumberPOE";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NumberPOE />
  </React.StrictMode>
);

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// import React from "react";
// import ReactDOM from "react-dom";
// import logo from "../src/logo.svg";

// const rootElement = document.getElementById("root");

// const hexacolor = () => {
//   let str = "0123456789abcdef";
//   let color = "";
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length);
//     color += str[index];
//   }

//   return "#" + color;
// };

// const hexaStyle = { backgroundColor: hexacolor() };

// const HexaColor = () => <div style={hexaStyle}>This is muticolor</div>;

// const ImageLogo = () => {
//   return (
//     <div>
//       <img src={logo} alt="logo"></img>
//     </div>
//   );
// };

// const headerStyle = {
//   backgroundColor: "#61DBFB",
//   fontFamily: "Helvetica Neue",
//   padding: 25,
//   lineHeight: 1.5,
// };

// // const header = (
// //   <header style={headerStyle}>
// //     <div className="header-wrapper">
// //       <h1>Welcome to 30 Days of React</h1>
// //       <h2>Getting started React</h2>
// //       <h3>JavaScript Library</h3>
// //       <p>Deepak Gawade</p>
// //       <strong>Oct 2, 2020</strong>
// //     </div>
// //   </header>
// // );

// const Header = () => {
//   return (
//     <header style={headerStyle}>
//       <div className="header-wrapper">
//         <h1>Welcome to 30 Days of React</h1>
//         <h2>Getting started React</h2>
//         <h3>JavaScript Library</h3>
//         <p>Deepak Gawade</p>
//         <strong>Oct 2, 2020</strong>
//       </div>
//     </header>
//   );
// };

// const mainStyles = {
//   backgroundColor: "#F3F0F5",
// };

// const techs = ["HTML", "CSS", "Node", "Javascript"];

// const TechList = () => {
//   return techs.map((tech) => <li>{tech}</li>);
// };

// // const main = (
// //   <main style={mainStyles}>
// //     <p>Prerequisite to get started react.js</p>
// //     <ul>
// //       <TechList />
// //     </ul>
// //   </main>
// // );

// const Main = () => {
//   return (
//     <main style={mainStyles}>
//       <p>Prerequisite to get started react.js</p>
//       <ul>
//         <TechList />
//       </ul>
//     </main>
//   );
// };

// const footerStyle = {
//   backgroundColor: "#F3F0F5",
// };

// // const footer = (
// //   <footer style={footerStyle}>
// //     <p>Copyright 2020</p>
// //   </footer>
// // );

// const Footer = () => {
//   return (
//     <footer style={footerStyle}>
//       <p>Copyright 2020</p>
//     </footer>
//   );
// };

// const app = (
//   <div>
//     <Header />
//     <ImageLogo />

//     <Main />
//     <Footer />
//   </div>
// );

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <ImageLogo />
//       <HexaColor />
//       <Main />
//       <Footer />
//     </div>
//   );
// };

// ReactDOM.render(<App />, rootElement);
