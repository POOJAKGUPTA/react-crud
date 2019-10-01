import React, { Component } from 'react';

 export default class Index extends Component {
 	state = {
 		loading: true,
        person:[],
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
            <div>
                <table>
                    <tbody>
                    <tr><th>Id</th><th>User Id</th><th>Title</th><th>Body</th></tr>
                {this.state.person.map((person, index) => (
                    <div>
                        <tr>
                        <td>{person.id}</td>
                        <td>{person.userId} </td>
                        </tr>
                    </div>

                ))}
                </tbody>
             </table>
            </div>
        )
    }
}
