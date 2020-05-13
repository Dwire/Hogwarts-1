import React from 'react';


class EditForm extends React.Component {


render(){
  return(
    <form >
    <h1>Create Your Own Student</h1>
      Name :<input value={this.props.student.name} name="name" onChange={e => this.handleChange(e)} placeholder="John Doe"/>
      Age :<input value={this.props.student.age} name="age" onChange={e => this.handleChange(e)} placeholder="45 Years Old"/>
      Role :<input value={this.props.student.role} name="role" onChange={e => this.handleChange(e)} placeholder="Student or Professor"/>
      Image 1 :<input value={this.props.student.img1} name="image1" onChange={e => this.handleChange(e)} placeholder="www.google.com/find?=ski3heo2bfjoq83eowen"/>
      Image 2 :<input value={this.props.student.img2} name="image2" onChange={e => this.handleChange(e)} placeholder="www.google.com/find?=ski3heo2bfjoq83eowen"/>
      House :
      <select value={this.props.student.img2} name="house" onChange={e => this.handleChange(e)}>
          <option value="Gryffindor">Please Select A House</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="HufflePuff">HufflePuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
      </select>
          <input type="submit"/>
    </form>
  )}
}

export default EditForm;
