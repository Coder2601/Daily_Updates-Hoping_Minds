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



import React from 'react'
import Counter from './Components/function-based-comps/useStateHook/Counter'
import Buttons from './Components/function-based-comps/props/Buttons'
import ParentForm from './Components/function-based-comps/props/Form/ParentForm'

const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Buttons /> */}
      <ParentForm />
    </>
  )
}

export default App