import React, { Component } from 'react';
import axios from 'axios'
class Create extends Component {
  constructor(props){
    super(props)
      this.state = {
        userId: '',
        title: '',
        body:  ''
    }
  }
    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value})
      }
    submitHandler = e => {
      e.preventDefault()
      console.log(this.state)
      axios.post('http://jsonplaceholder.typicode.com/posts', this.state)
      .then( response => {
        console.log(response)
      })
    .catch(error =>{
        console.log(error)
    })
    }
    render() {
      const { userId, title, body } = this.state
        return (
            <div style={{marginTop: 10}}>
            	<p>Welcome to Create Component!!</p>
                <h3>Add New Business</h3>
                <form onSubmit={this.submitHandler}>
                     <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input type="text"  name="title" value={title} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text"  name="body" value={body} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register Business</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Create;