import React, { Component } from "react";
import Features from "../components/elibrary/Features";
import Research from "../components/elibrary/Research";
import Result from "../components/elibrary/Result";
import Landing from "../components/elibrary/landing";

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
