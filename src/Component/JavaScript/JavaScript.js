import React from "react";
import Execution from "./Execution/Execution";
import FunctionAndVariable from "./FunctionAndVariable/FunctionAndVariable";
import Scope from "./Scope/Scope";
import Hoisting from "./Hoisting/Hoisting";
import Closer from "./Closer/Closer";

const JavaScript = () => {
  return (
    <div style={{ marginleft: "50px" }}>
      <Execution />
      <FunctionAndVariable />
      <Scope />
      <Hoisting />
      <Closer />
    </div>
  );
};
export default JavaScript;
