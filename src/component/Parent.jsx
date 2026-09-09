// import {useState} from 'react';
import React from 'react';
import Child from './Child';



// Ten component gi thi function cung vay

// child nhan prop

// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Parent count: {count}</h2>
//       <Child count={count} /> 
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// child tu ban len parent

// function Parent() {
//   const [count, setCount] = React.useState(0); 

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <Child onIncrease={() => setCount(count + 1)} />
//     </div>
//   );
// }

// Dung ca hai
function Parent() {
  const [count, setCount] = React.useState(0); 

  return (
    <div>
        <h1>Count: {count} </h1>
        <Child onIncrease = {() => setCount(count + 1)} count = {count} />
    </div>

  );
}

export default Parent;
