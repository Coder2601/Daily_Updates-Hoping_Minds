import React from "react"
import  EmployeeForm from "./Components/project/EmployeeForm"
import Counter from './Components/pureComponents/Counter'
import Chairs from "./Components/musicalChair/Chairs"
import Heading from "./Components/props/HeadingClass"
import HeadingFunction from "./Components/props/HeadingFunction"
import Button from "./Components/props/Button"
import PeopleParent from "./Components/props/peopleExample/PeopleParent"
import Form from "./Components/Form"
import FishTable from "./Components/list_Rendering/FishTable"


class App extends React.Component{
  constructor(){
    super();
    this.state={
      msg:'Welcome user'
    }
  }

  render(){
    return(
      <>
        <h2>React Session on Props</h2>
        
        {/* <Heading a={this.state.msg} />
        
        <HeadingFunction kuchbhi={this.state.msg} /> */}

        {/* <EmployeeForm /> */}
        {/* <Counter /> */}
        {/* <Chairs /> */}
        {/* < Button /> */}
        {/* <PeopleParent /> */}
        {/* <Form /> */}
        <Counter />
        {/* <FishTable /> */}
      </>
    )
  }
}
export {App}