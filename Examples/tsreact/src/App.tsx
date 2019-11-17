import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  colour: string;
}

const App = (props: AppProps) => {
  return <div className="App">{props.colour}</div>;
};

export default App;
