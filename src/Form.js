import React from 'react';


class Form extends React.Component {
  state={
    name:"",
    age:"",
    role:"",
    image1:"",
    image2:"",
    house:""
  }
  handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);

        this.setState({
          [e.target.name]:e.target.value
        })
  }
  

render(){
  return(

    <form >
    <h1>Create Your Own Student</h1>
      Name :<input value={this.state.name} name="name" onChange={e => this.handleChange(e)} placeholder="John Doe"/>
      Age :<input value={this.state.age} name="age" onChange={e => this.handleChange(e)} placeholder="45 Years Old"/>
      Role :<input value={this.state.role} name="role" onChange={e => this.handleChange(e)} placeholder="Student or Professor"/>
      Image 1 :<input value={this.state.img1} name="image1" onChange={e => this.handleChange(e)} placeholder="www.google.com/find?=ski3heo2bfjoq83eowen"/>
      Image 2 :<input value={this.state.img2} name="image2" onChange={e => this.handleChange(e)} placeholder="www.google.com/find?=ski3heo2bfjoq83eowen"/>
      House :
      <select value={this.state.img2} name="house" onChange={e => this.handleChange(e)}>
          <option value="Gryffindor">Please Select A House</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="HufflePuff">HufflePuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
      </select>
          <input type="submit"onClick={e => this.props.form(e,this.state)}/>
    </form>

  )}
}

export default Form;
