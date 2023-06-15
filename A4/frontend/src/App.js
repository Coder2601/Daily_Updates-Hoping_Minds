import React, { useState } from 'react';
import { Lifecycles } from './components/classbasedComps/Lifecycle-methods/Lifecycles';
import Rockstar from './components/classbasedComps/pureComponents/PureComponent';
import FeedbackForm from './components/functionbasedComp/FormHandling/FeedbackForm';
import SideEffectComp from './components/functionbasedComp/useEffectHook/SideEffectComp';
import Album from './components/functionbasedComp/useEffectHook/Album';
import CompA from './components/functionbasedComp/useContextHook/CompA';
import Confusion from './components/functionbasedComp/useContextHook/context/Confusion';
import CounterContext from './components/functionbasedComp/useContextHook/context/CounterContext';
import DisplayCount from './components/functionbasedComp/useContextHook/DisplayCount';
import DoubleCount from './components/functionbasedComp/useContextHook/DoubleCount';
import IncDecCount from './components/functionbasedComp/useContextHook/IncDecCount';
import CountTable from './components/functionbasedComp/useContextHook/CountTable';
import ControlledForm from './components/functionbasedComp/controlledVsUnctrolled/useStateHook/ControlledForm';
import UncontrolledForm from './components/functionbasedComp/controlledVsUnctrolled/useRefHook/UncontrolledForm';
import Multiplier from './components/functionbasedComp/redux/components/Multiplier';
import ReducerCounter from './components/functionbasedComp/useReducerHook/ReducerCounter';
import Intensifier from './components/functionbasedComp/useReducerHook/Intensifier';
import KeypadLock from './components/functionbasedComp/useReducerHook/KeypadLock';
import ReduxCounter from './components/functionbasedComp/redux/components/ReduxCounter';
import LoginRedux from './components/functionbasedComp/redux/components/LoginRedux';
import { useSelector } from 'react-redux';

function App() {

  // const[isLogin, setLogin] = useState(false);
  const loginVal = useSelector(state=>state.login)

  return (
    <>
    {console.log(loginVal)}

      {/* {
      isLogin?
      <>
      <button onClick={()=>setLogin(false)}>Logout</button>
      <Lifecycles />
      </>
      :
      <>
      <button onClick={()=>setLogin(true)}>Login</button>
      <Login/>
      </>
      } */}

      {/* <Rockstar/> */}
      {/* <FeedbackForm/> */}
      {/* <SideEffectComp/> */}
      {/* <Album/> */}
      {/* <Confusion>
        <CompA/>
      </Confusion> */}

      {/* <CounterContext>
        <DisplayCount/>
        <DoubleCount/>
        <IncDecCount/>
        <CountTable/>
      </CounterContext> */}

      {/* <ControlledForm />
      <hr/>
      <UncontrolledForm/> */}

      {/* <Multiplier /> */}
      {/* <ReducerCounter/> */}
      {/* <Intensifier/> */}
      {/* <KeypadLock/> */}
      {loginVal?
      <>
      <ReduxCounter/>
      <Multiplier/>
      </>
      :
      <LoginRedux/>
      }
      
      
    </>
  );
}

// export class Login extends React.Component{
//   componentWillUnmount(){
//     console.log('componentWillUnmount chal peyaa..');
//   }
//   render(){
//       return(
//           <>
//             Login Component
//           </>
//       )
//   }
// }

export { App }
