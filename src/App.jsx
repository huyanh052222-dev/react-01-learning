import './App.css'
import './component/Clock/Clock.css'
import './component/Watch/WatchFace.css'
import Clock from './component/Clock/Clock.jsx'
// import Temperature from './component/Temperature.jsx'

// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import Parent from './component/Parent.jsx'

// function Counter() {
//   const [count, setCount] = useState(-0.00001);

//   return (
//     <div>
//       <p style={{ color: count % 2 === 0 ? "red" : "blue" }}>
//         {count}
//       </p>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }



function App() {
  return (
    <>
      {/* <Parent/> */}
      {/* <Temperature/> */}
      <Clock/>
    </>
    
  )
}

export default App
