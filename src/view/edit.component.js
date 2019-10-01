// // edit.component.js

// import React, { Component } from 'react';

// export default class Edit extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Welcome to Edit Component!!</p>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';

 export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}