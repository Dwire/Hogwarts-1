import React from "react";
import SchoolCard from "./schoolCard.js"

class SchoolContainer extends React.Component {
  state={
    filtered:this.props.studentArry,
    findStudent:null
  }

  render() {

    const studentCard = () => {return this.props.studentsArry.map((student) => {
      return <SchoolCard  student={student} handleClick={this.props.handleClick} />
    })}
    const  filteredStudents = (e) => {
      console.log(e)

      this.setState({
        findStudent:e.target.value
      })
      const foundStudents = this.state.filtered.filter(student => student.name.includes(this.state.findStudent))

      console.log("This is the array of students with that name:",foundStudents);
      return foundStudents

    }

    // const foundStudents = this.state.filtered.filter(student => student.name.includes(this.state.findStudent))


    return (
      <div>
        <h1>All Students</h1>
        <input value={this.state.findStudent} name="findStudent" placeholder="Search by Name/ House"onChange={e => filteredStudents(e)}/>
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
