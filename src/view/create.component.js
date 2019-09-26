import React, { Component } from 'react';

class Create extends Component {
  constructor(props){
    super(props)
      this.state = {
        name: '',
        business_nbame: '',
        gst_no:  '',
    }

  }
   changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.vale})
      }
    submitHandler = (e) => {
      e.preventDefault()
      console.log(this.state)
    }
    render() {
      const { name, business_nbame, gst_no } = this.state
        return (
            <div style={{marginTop: 10}}>
            	<p>Welcome to Create Component!!</p>
                <h3>Add New Business</h3>
                <form  onSubmit={this.submitHandler} >
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" name="name" value = {name} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input type="text"  name="business_nbame" value = {business_nbame} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text"  name="gst_no" value = {gst_no} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
 export default Create;

