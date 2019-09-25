import React, { Component } from 'react';

const $ = window.$;
export default class Create extends Component {
     handleClick() {
    var name = this.refs.name.value;
    console.log("this.ref.name.value")
    // var description = this.refs.description.value;
    $.ajax({
      url: "http://localhost:5000/blogs",
      type: "POST",
      data: { blog: { name: name } },
      success: response => {
        console.log("it worked!", response);
      }
    });
  }
    render() {
        return (
            <div style={{marginTop: 10}}>
            	<p>Welcome to Create Component!!</p>
                <h3>Add New Business</h3>
                <form>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input ref="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input ref="business" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input ref="gstno" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input ref="submit" value="Register Business" className="btn btn-primary"/>
                         <button onClick={this.handleClick}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

