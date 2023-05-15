// import Courses from './Components/class-based-comps/Courses';
// import {Items, Navigation, List } from './Components/class-based-comps/Navigation';
// import Parent from './Components/class-based-comps/conditional-rendering/Parent';
// import Form from './Components/class-based-comps/form-handling/formFile'
// import Cycle from './Components/class-based-comps/lifecycleMethods&PureComponents/Cycle';
// import ControlButtons from './Components/class-based-comps/props/ControlButtons';
// import ParentForm from './Components/class-based-comps/props/ParentForm';
// import Calculator from './Components/class-based-comps/states/Calculator';
// import Counter from './Components/class-based-comps/states/Counter';

// function App() {
//   return (
//     <>
//     {/* <Form /> */}
//     {/* <Items />
//     <Courses />
//     <List />
//     <Navigation /> */}
//     {/* <Counter /> */}
//     {/* <Calculator /> */}
//     {/* <Form /> */}
//     {/* <Parent /> */}
//     {/* <ControlButtons /> */}
//     {/* <ParentForm /> */}
//     {/* <Cycle /> */}
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react'
import Counter from './Components/class-based-comps/Counter'
import Buttons from './Components/function-based-comps/props/Buttons'
import ParentForm from './Components/function-based-comps/props/Form/ParentForm'
import Table from './Components/function-based-comps/list-rendering/Table'
import EffectComponent from './Components/function-based-comps/useEffectHook/EffectComponent'
import Posts from './Components/function-based-comps/useEffectHook/Posts'

const App = () => {
  const[show,setShow] = useState(true)
  return (
    <>
      {/* <Counter /> */}
      {/* <Buttons /> */}
      <ParentForm />

      {/* <div className="App">

        <Table />
      </div> */}
      {/* <EffectComponent /> */}
      {/* <Posts /> */}
      {/* <button onClick={()=>setShow(false)}>Hide</button> */}
      {/* {show?<Counter />:<h2>Hidden</h2>} */}

    </>
  )
}

export default App