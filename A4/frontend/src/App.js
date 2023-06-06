import React, { useState } from 'react';
import {Lifecycles} from './components/classbasedComps/Lifecycle-methods/Lifecycles';
import Rockstar from './components/classbasedComps/pureComponents/PureComponent';
import FeedbackForm from './components/functionbasedComp/FormHandling/FeedbackForm';

function App() {
  
  const[isLogin, setLogin] = useState(false);

  return (
    <>
      
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
      <FeedbackForm/>
    </>      
  );
}

export class Login extends React.Component{
  componentWillUnmount(){
    console.log('componentWillUnmount chal peyaa..');
  }
  render(){
      return(
          <>
            Login Component
          </>
      )
  }
}

export {App}
