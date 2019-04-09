import React from "react";
import SchoolCard from "./schoolCard.js"

class SchoolContainer extends React.Component {
  state={
    findStudent:""
  }

  filteredStudents = (e) => {

    this.setState({
      findStudent:e.target.value
    })

  }

  render() {

    const foundStudents = this.props.studentsArry.filter(student =>  student.name.includes(this.state.findStudent ))

    console.log(this.state)
    const studentCard = () => {return foundStudents.map((student) => {
      return <SchoolCard  student={student} handleClick={this.props.handleClick} />
    })}

    // const foundStudents = this.state.filtered.filter(student => student.name.includes(this.state.findStudent))


    return (
      <div>
        <h1>All Students</h1>
        <input value={this.state.findStudent} name="findStudent" placeholder="Search by Name/ House"onChange={this.filteredStudents}/>
        <br/>
        <br/>
        <br/>
        {studentCard()}
        <hr/>
      </div>
    );
  }
}

export default SchoolContainer
