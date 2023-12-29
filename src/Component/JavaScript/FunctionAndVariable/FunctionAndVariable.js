import React from "react";

const FunctionAndVariable = () => {
  const codeString = `
        var x=2;
        a();
        b();
        console.log(x);
         function a(){
            var x=3;
            console.log(x);
        }
    function b(){
        var x=4;
        console.log(x);
    }
    `;

  const codeLines = codeString.split("\n");

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>FunctionAndVariable</h1>
      <p>
        {codeLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <ul>
        <h3>var (Function-Scoped):</h3>
        <li>
          Variables declared with var are function-scoped, meaning they are only
          accessible within the function where they are declared.
        </li>
        <li>They can be reassigned and re-declared.</li>
      </ul>
      <ul>
        <h3>let (Block-Scoped):</h3>
        <li>
          Variables declared with let are block-scoped, meaning they are only
          accessible within the block (enclosed by curly braces) where they are
          declared.
        </li>
        <li>They can be reassigned but not re-declared in the same scope.</li>
      </ul>
      <ul>
        <h3>const (Block-Scoped Constants):</h3>
        <li>Variables declared with const are block-scoped like let.</li>
        <li>
        They can not be reassigned and not re-declared in the same scope. (must be initialized during declaration)
        </li>
      </ul>
    </div>
  );
};

export default FunctionAndVariable;
