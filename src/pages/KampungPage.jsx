import React, { Component } from "react";
import Features from "../components/kampung/Features";
import Research from "../components/kampung/Research";
import Result from "../components/kampung/Result";
import Kampung from "../components/kampung/kampung";

export default class KampungPage extends Component {
  render() {
    return (
      <div>
        <Kampung />
        <Features />
        <Research />
        <Result />
      </div>
    );
  }
}
