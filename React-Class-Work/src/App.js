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
import Todo from './Components/function-based-comps/Todos/Todo'
import Screen from './Components/function-based-comps/Weather-app/Screen'
import RefComponent from './Components/function-based-comps/useRefHook/RefComponent'
import CallbackComponent from './Components/function-based-comps/useCallback-Hook/CallbackComponent'
import CompA from './Components/function-based-comps/contextHook/CompA'
import Playlist from './Components/function-based-comps/Youtube/Playlist'
import CounterReducer from './Components/function-based-comps/useReducerHook/CounterReducer'
import HideNseek from './Components/function-based-comps/useReducerHook/HideNseek'
import RoomIntensity from './Components/function-based-comps/useReducerHook/RoomIntensity'
import KeypadLock from './Components/function-based-comps/useReducerHook/KeypadLock'
import Login from './Components/function-based-comps/Routing/Login'
import Register from './Components/function-based-comps/Routing/Register'
import About from './Components/function-based-comps/Routing/About'
import Home from './Components/function-based-comps/Routing/Home'
import Courses from './Components/function-based-comps/Routing/Courses'
import NotFound from './Components/function-based-comps/Routing/NotFound'
import './Components/function-based-comps/Routing/routing.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  const[show,setShow] = useState(true)

  return (
    <>
      {/* <CompA /> */}
      {/* <Counter /> */}
      {/* <Buttons /> */}
      {/* <ParentForm /> */}

      {/* <div className="App"> */}

        {/* <Table /> */}
      {/* </div> */}
      {/* <EffectComponent /> */}
      {/* <Posts /> */}
      {/* <button onClick={()=>setShow(false)}>Hide</button> */}
      {/* {show?<Counter />:<h2>Hidden</h2>} */}

      {/* <Todo /> */}
      {/* <Screen /> */}
      {/* <RefComponent/> */}
      {/* <CallbackComponent/> */}
      
      {/* <Playlist /> */}
      {/* <CounterReducer /> */}
      {/* <HideNseek/> */}
      {/* <RoomIntensity /> */}
      {/* <KeypadLock /> */}

      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses/>}>

            <Route path='frontend' element={<FrontendCourse/>} />
            <Route path='backend' element={<BackendCourse/>}/>
            
          </Route>
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </Router>

      
    </>
  )
}

export default App