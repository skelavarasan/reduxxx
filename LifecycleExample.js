// import React, { Component } from 'react';

// class LifecycleExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     console.log('Constructor - Component is being constructed');
//   }

//   componentDidMount() {
//     console.log('Component Did Mount - Component is now in the DOM');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('Should Component Update - Decide if the component should re-render');
//     return true; // Always re-render in this example
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component Did Update - Component updated in the DOM');
//   }

//   componentWillUnmount() {
//     console.log('Component Will Unmount - Component is about to be removed from the DOM');
//   }

//   incrementCount = (rajendra) => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   }

//   render() {
//     console.log('Render - Rendering the component');
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// export default LifecycleExample;








import React, { Component } from 'react'

export default class LifecycleExample extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor - Component is being constructed');
      }

      incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }

  render() {
    return (
      <div>
        <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
      </div>
    )
  }
}















