import React from "react";
const Scope = () => {
  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Scope in React:</h1>
      <h2>Block Scope:</h2>
      <li>In programming languages like JavaScript, a block scope refers to the area within curly braces {} where function and declared variables inside that block are only accessible within that block</li>
      <h2>Global Scope:</h2>
      <li>Variables declared outside any component are in the global scope and can be accessed throughout the entire application.</li>
      <h2>Component Scope:</h2>
      <li>Each React component has its own scope.</li>
      <li> Variables declared within a component are local to that component and cannot be directly accessed outside of it.</li>
      <h2>Scope Chain in React:</h2>
      <li>The scope chain refers to the hierarchy of scopes in which JavaScript looks for variables when trying to resolve a reference.</li> 
      <li>In React, the scope chain is important when dealing with nested components. </li>
      <li>If a variable is not found in the local scope of a component, JavaScript will look in the parent component's scope, and so on, until it reaches the global scope.</li>
      <h2>Lexical Environment in React:</h2>
      <li>Lexical environment refers to the environment created by the combination of the current scope and its lexical scope chain.</li> 
      <li>In React, each component creates its own lexical environment, which includes the variables declared within the component and any variables accessible through the scope chain.</li>
      <h3>Shadowing</h3>
      <li>Shadowing in programming occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope. As a result, the inner variable "shadows" or takes precedence over the outer variable within its scope. This can lead to unexpected behavior and bugs if not used carefully.</li>
      </div>
  );
};
export default Scope;