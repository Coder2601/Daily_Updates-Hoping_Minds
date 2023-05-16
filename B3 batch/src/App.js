// -----------CLASS BASED APP COMPONENT---------------

// import React from "react"
// import  EmployeeForm from "./Components/project/EmployeeForm"
// import Counter from './Components/pureComponents/Counter'
// import Chairs from "./Components/musicalChair/Chairs"
// import Heading from "./Components/props/HeadingClass"
// import HeadingFunction from "./Components/props/HeadingFunction"
// import Button from "./Components/props/Button"
// import PeopleParent from "./Components/props/peopleExample/PeopleParent"
// import Form from "./Components/Form"
// import FishTable from "./Components/list_Rendering/FishTable"

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       msg:'Welcome user',
//       isClicked:true
//     }
//   }

//   render(){
//     const updateState=()=>{
//       console.error('change button clicked!!');
//       this.setState({isClicked:false})}
//     return(
//       <>
//         <h2>React Session on Props</h2>
        
//         {/* <Heading a={this.state.msg} />
        
//         <HeadingFunction kuchbhi={this.state.msg} /> */}

//         {/* <EmployeeForm /> */}
//         {/* <Counter /> */}
//         {/* <Chairs /> */}
//         {/* < Button /> */}
//         {/* <PeopleParent /> */}
//         {/* <Form /> */}
//         {this.state.isClicked?<Button/>:null}
//         <Counter />
//         <button onClick={updateState}>Change</button>
//         {/* <FishTable /> */}
//       </>
//     )
//   }
// }

// export default App


//-----------FUNCTION BASED APP COMPONENT----------------

import ChildB from "./Components/function-based_Comps/contextAPI/ComponentB"
import ChildC from "./Components/function-based_Comps/contextAPI/ComponentA"
import ParentA from "./Components/function-based_Comps/contextAPI/ComponentC"
import Button from "./Components/function-based_Comps/effectHook/Button"
import CallApi from "./Components/function-based_Comps/effectHook/CallApi"
import PracticeUseEffect from "./Components/function-based_Comps/effectHook/PracticeUseEffect"
import Demo from "./Components/function-based_Comps/effectHook/demo"
import Counter from "./Components/function-based_Comps/stateHook/Counter"
import CallbackHook from "./Components/function-based_Comps/useCallbackHook/CallbackHook"
import Buttons from "./Components/function-based_Comps/useContextHook/Buttons"
import Display from "./Components/function-based_Comps/useContextHook/Display"
import MainContext from "./Components/function-based_Comps/useContextHook/MainContext"
import InputVal from "./Components/function-based_Comps/useRefHook/InputVal"
import ComponentA from "./Components/function-based_Comps/contextAPI/ComponentA"
import MainParent from "./Components/function-based_Comps/contextAPI/MainParent"
import MainComp, { formContext } from "./Components/function-based_Comps/useContextHook/myForm/MainComp"
import Login from "./Components/function-based_Comps/useContextHook/myForm/Login"
import { useContext, useEffect } from "react"
import Home from "./Components/function-based_Comps/reactRouting/Home"
import IncDec from "./Components/function-based_Comps/useReducer/IncDec"
import Room from "./Components/function-based_Comps/useReducer/Room"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Courses from "./Components/function-based_Comps/reactRouting/Courses"
import About from "./Components/function-based_Comps/reactRouting/About"
import NotFound from "./Components/function-based_Comps/reactRouting/NotFound"
import Navbar from "./Components/function-based_Comps/reactRouting/Navbar"
import FEDcourse from "./Components/function-based_Comps/reactRouting/FEDcourse"
import BEDcourse from "./Components/function-based_Comps/reactRouting/BEDcourse"
import './styles/app.css'
import Todo from "./Components/todoList/Todo"
import ReduxComponent from "./Components/function-based_Comps/redux/ReduxComponent"
import DisplayCount from "./Components/function-based_Comps/DisplayCount"
function App() {
  // const{isSubmitted} = useContext(formContext);
  
  return (
    <>
      {/* <Counter /> */}
      {/* <Button /> */}
      {/* <CallApi /> */}
      {/* <Demo /> */}
      {/* <PracticeUseEffect /> */}
      {/* <InputVal /> */}
      {/* <CallbackHook /> */}
      {/* <MainParent>
        <ComponentA />
      </MainParent> */}
      {/* <MainContext>
        <Buttons />
        <Display />
      </MainContext> */}


      {/* {isSubmitted? <Home />:<Login/>} */}
      
      {/* <IncDec /> */}
      {/* <Room /> */}

      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="fedCourse" element={<FEDcourse/>}/>
            <Route path="bedCourse" element={<BEDcourse/>}/>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </Router> */}

      {/* <Todo /> */}
      <ReduxComponent />
      <DisplayCount />

    </>
  )
}

export default App

// import FishTable from './Components/class-based_Comps/list_Rendering/FishTable';
// import Home from './RegLoginFED/Home';
// import Login from './RegLoginFED/Login';
// import Navbar from './RegLoginFED/Navbar';
// import Register from './RegLoginFED/Register';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       {/* <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/login' element={<Login />} />
//         </Routes>
//       </Router> */}
//       <FishTable />
//     </div>
//   );

// }
// export default App