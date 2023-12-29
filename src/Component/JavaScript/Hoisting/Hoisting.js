

const Hoisting = () => {
    return (
        <div style={{ marginLeft: "50px" }}>
            <h1>Hosting</h1>
            <li>Hosting means "উত্তোলন"</li>
            <li> the term "hoisting" in JavaScript is often used to describe the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.</li>
            <li> This process sets up the memory space for variables and functions before the code is executed.</li>
            <li> Var , Let and const all are be Hoisted</li>
            <li> For var value assigned as Undefined</li>
           <li>For let and Const no assigned as Undefined so it give refference error </li>
            <li> let and const unable to kept space in memory of that time is called temporal dead zone</li>
           </div>
    )
}
export default Hoisting;