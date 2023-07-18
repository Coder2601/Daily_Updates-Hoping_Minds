import ABC, { Rooster } from "./components/classBasedComps/Lifecycle";
import FeedbackForm from "./components/functionbasdComps/FormHandling/FeedbackForm";
import CalculusStore from "./components/functionbasdComps/contextHook/Calculus/CalculusStore";
import Cubes from "./components/functionbasdComps/contextHook/Calculus/Cubes";
import Tables from "./components/functionbasdComps/contextHook/Calculus/Tables";
import WelcomeScreen from "./components/functionbasdComps/contextHook/Calculus/WelcomeScreen";
import CompA from "./components/functionbasdComps/contextHook/demoContext/CompA";
import Storehouse from "./components/functionbasdComps/contextHook/demoContext/Storehouse";
import LuxuryCarShow from "./components/functionbasdComps/listRendering/LuxuryCarShow";
import Multiplier from "./components/functionbasdComps/props/Multiplier";
import Basket from "./components/functionbasdComps/reduxDemo/Basket";
import ReduxDemo from "./components/functionbasdComps/reduxDemo/ReduxDemo";
import Todo from "./components/functionbasdComps/reduxDemo/Todo";
import CallbacksPeCallbacks from "./components/functionbasdComps/useCallbackHook/CallbacksPeCallbacks";
import DemoEffect from "./components/functionbasdComps/useEffectHook/DemoEffect";
import UserDetailsAPI from "./components/functionbasdComps/useEffectHook/UserDetailsAPI";
import DemoReducer from "./components/functionbasdComps/useReducerHook/DemoReducer";
import Intensity from "./components/functionbasdComps/useReducerHook/Intensity";
import DemoForm from "./components/functionbasdComps/useRefHook/DemoForm";
import Counter from "./components/functionbasdComps/useStateHook/Counter";
import './style/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/functionbasdComps/routing/Home'
import Courses from "./components/functionbasdComps/routing/Courses";
import About from "./components/functionbasdComps/routing/About";
import Products from './components/functionbasdComps/routing/Products';
import Cart from './components/functionbasdComps/routing/Cart'
import Login from './components/functionbasdComps/routing/Login'
import Register from './components/functionbasdComps/routing/Register'
import NotFound from "./components/functionbasdComps/routing/NotFound";
import FED_Courses from "./components/functionbasdComps/routing/FED_Courses";
import BED_Courses from "./components/functionbasdComps/routing/BED_Courses";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          {/* path for root or index component  */}
          <Route path="/courses" element={<Courses/>}>
            <Route path="fed" element={<FED_Courses/>} />
            <Route path="bed" element={<BED_Courses/>} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>}/>
          <Route path = '/register' element={<Register/>} /> 
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </Router>
      {/* <ABC />
      <Rooster/> */}
      {/* <Counter /> */}
      {/* <FeedbackForm />
      <Multiplier/> */}
      {/* <DemoEffect/> */}
      {/* <UserDetailsAPI/> */}
      {/* <LuxuryCarShow/> */}
      {/* <CallbacksPeCallbacks /> */}
      {/* <DemoForm /> */}
      {/* <Storehouse> 
        <CompA />
      </Storehouse> */}

      {/* <CalculusStore>
        <WelcomeScreen/>
        <Cubes/>
        <Tables/>
      </CalculusStore> */}
      {/* <DemoReducer/> */}
      {/* <Intensity /> */}
      {/* <ReduxDemo />
      <Basket /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;