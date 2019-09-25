// index.component.js

import React, { Component } from 'react';

 export default class Index extends Component {
 	state = {
 		loading: true,
 		person: [],	
 	};

 	async componentDidMount() {
 		const url= "https://api.randomuser.me/";
 		const response = await fetch(url);
 		const data = await response.json();
 		this.setState({person: data.results[0]});
 		console.log(this.state.person)
 	}
    render() {console.log(this.state.person)
var poo = ""
    	if (this.state.person.length == 0) {
          poo = ""
    	} else {
    		poo = (<div>
    			<table>
    			<tr><th>Title</th><th>First name</th><th>Last name</th><th>Gender</th></tr>
    			<tr>
              <td>{this.state.person.name.title}</td>
              <td>{this.state.person.name.first}</td>
              <td>{this.state.person.name.last}</td>
              <td>{this.state.person.gender}</td>
              </tr>
              </table>
            </div>)
    	}
        return (
            poo
        )
    }
}