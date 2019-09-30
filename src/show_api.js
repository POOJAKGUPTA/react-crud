import React, { Component } from 'react';

 export default class Index extends Component {
 	state = {
 		loading: true,
 		person: [],	
 	};

 	async componentDidMount() {
 		const url= "http://jsonplaceholder.typicode.com/posts";
 		const response = await fetch(url);
 		const data = await response.json();
 		this.setState({person: data});
        debugger
 		console.log(this.state.person)
 	}
    render() {
        return (
            this.state.person.map(function(item))
        )
    }
}

