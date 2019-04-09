import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SchoolContainer from "./SchoolContainer";
import HouseContainer from "./HouseContainer.js";
import Form from "./Form.js"
class App extends Component {

  state = {
    students: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/potter-stuff")
    .then(res => res.json())
    .then(studentsArry => {
      this.setState({
        students:studentsArry
      })
    })
  }

  createStudentForm = (e,object) => {

    e.preventDefault()
    console.log(e);
    console.log(object);

    const studentArry = [...this.state.students]
    this.setState({
      students:[object,...studentArry]
    })
  }

  handleClick = (e,name) => {
    e.preventDefault()
      const studentArrCopy = [...this.state.students]
      const foundStudent = studentArrCopy.find(student => student.name === name)
      foundStudent.house = e.target.parentElement.childNodes[0].value
      this.setState({
        students:studentArrCopy
      })
  }

  editForm = (e,name) => {
    const studentArrCopy = [...this.state.students]
    const foundStudent = studentArrCopy.find(student => student.name === name)

    console.log(e);
  }

  render() {
    return (
      <div id="main">
        <h1>Hogwarts School Of Magic</h1>
        <hr/>
        <Form form={this.createStudentForm}/>
        <hr/>
        <SchoolContainer studentsArry={this.state.students} handleClick={this.handleClick}/>
        <HouseContainer studentsArry={this.state.students}/>
      </div>
    );
  }
}

export default App;
