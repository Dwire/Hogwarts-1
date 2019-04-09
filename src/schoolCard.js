import React from "react";


class SchoolCard extends React.Component {
  state={
    clicked:false
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({clicked: !this.state.clicked })
  }
  render() {
    return (
      <div  id="SchoolCard">
        <h1>{this.props.student.name}</h1>
        <img src={this.props.student.image1}/>
        <h3  onClick={this.handleClick}>House : {this.props.student.house}</h3>
              {this.state.clicked === false ? "":<form >
                <select>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="HufflePuff">HufflePuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                </select>
                    <input type="submit"onClick={e => this.props.handleClick(e,this.props.student.name)}/>
              </form>
              }
        <h3>Age : {this.props.student.age}</h3>
        <h3>Role : {this.props.student.role}</h3>
      </div>
    );
  }
}

export default SchoolCard
