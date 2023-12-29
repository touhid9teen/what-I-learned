import './Style.css'
const Execution = () => {
  return (
    <>
      <h1 className="heading">Arrow Function</h1>
      <h2 className="heading">- Basic Syntax</h2>
      <p className="heading">{`const functionName = (parameter1, parameter2, parameter3) => { }`}</p>
      <h1 className="heading">JavaScript Work and Execution</h1>
      <div className="heading">
        --> Every thing in JavaScript is an object.
        <br />
        --> JavaScript is a single threaded language that can be non-blocking.
        <br />
        <br />
        " এক্সিকিউশন কন্টেক্সট একটি এনভাইরনমেন্ট যেখানে জাভাস্ক্রিপ্ট কোড
        এক্সিকিউট করা হয় "
        <br />
        <br />
        <h2>Each execution context has two phases:</h2>
        <br />
        <h3>Memory Creation Phase:</h3> <br />
        In this phase, the JavaScript engine scansthe current execution context
        and
        <br />
        --> identifies all variable and function declarations.
        <br />
        --> It sets up the memory space for variables and functions,
        <br />
        --> which is known as "hoisting".
        <br />
        --> In this phase, variables are initialized with undefined
        <br />
        --> and function declarations are placed in memory in their entirety.
        <br />
        <br />
        <h3>Code Execution Phase:</h3> <br />
        In this phase, the JavaScript engine starts executing the code line by
        line.
        <br />
        --> It assigns the actual values to the variables
        <br />
        --> and executes the function calls.
        <br />
        --> The JavaScript engine maintains a stack known as the "Execution
        Stack" or "Call Stack".
        <br />
        --> This stack keeps track of all the execution contexts.
        <br />
        --> Whenever a function is called, a new execution context is created
        and added to the stack.
        <br />
        --> When the function execution is completed, its execution context is
        popped from the stack.
        <br />
        <br />
      </div>
    </>
  );
};
export default Execution;
