import React, { Component } from "react";
import Features from "../components/icareli/Features";
import Research from "../components/icareli/Research";
import Result from "../components/icareli/Result";
import Landing from "../components/icareli/landing";

export default class ELibrary extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Features />
        <Research />
        <Result />
      </div>
    );
  }
}
