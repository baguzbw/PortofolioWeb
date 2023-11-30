import React, { Component } from "react";
import Features from "../components/icareli/Features";
import Research from "../components/icareli/Research";
import Landing from "../components/icareli/landing";

export default class ELibrary extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Features />
        <Research />
      </div>
    );
  }
}
