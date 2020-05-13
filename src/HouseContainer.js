import React, { Component } from 'react';
import EditForm from "./editForm.js"
class HouseContainer extends Component {
  state={
    clicked:false
  }
handleClick = () => {
this.setState({
  clicked: !this.state.clicked
})
}

  render() {

    const houseGryffindor = () => {
      let foundStudents = this.props.studentsArry.filter(student => student.house ==="Gryffindor");
        return foundStudents.map(student => <div >
          <h3>{student.name}</h3>
          <img onClick={this.handleClick} src={student.image2}/>
          {this.state.clicked === true ? <EditForm student={student}/>:"" }
        </div>)
    }
    const houseSlytherin = () => {
      let foundStudents = this.props.studentsArry.filter(student => student.house ==="Slytherin");
        return foundStudents.map(student => <div>
          <h3>{student.name}</h3>
          <img src={student.image2}/>
        </div>)
    }
    const houseHufflePuff = () => {
      let foundStudents = this.props.studentsArry.filter(student => student.house ==="HufflePuff");
        return foundStudents.map(student => <div>
          <h3>{student.name}</h3>
          <img src={student.image2}/>
        </div>)
    }
    const houseRavenclaw = () => {
      let foundStudents = this.props.studentsArry.filter(student => student.house ==="Ravenclaw");
        return foundStudents.map(student => <div>
          <h3>{student.name}</h3>
          <img src={student.image2}/>
        </div>)
    }


    return (<div >
                <h1><u>School Teams</u></h1>
                <br/>
                <div id="SchoolContainer">
                      <div  className="inline-block">
                        <h2><u>Gryffindor</u></h2>
                          {houseGryffindor()}
                      </div>
                      <div className="inline-block">
                        <h2><u>Slytherin</u></h2>
                          {houseSlytherin()}
                      </div>

                      <div className="inline-block">
                          <h2><u>HufflePuff</u></h2>
                            {houseHufflePuff()}
                      </div>

                      <div className="inline-block">
                        <h2><u>Ravenclaw</u></h2>
                          {houseRavenclaw()}
                      </div>
                </div>

            </div>

    )
}
}
export default HouseContainer;
