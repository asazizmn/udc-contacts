/**
 * App.js - udc-contacts
 */
import React, { Component } from 'react';



/**
 * Custom class component that returns a list of names
 */
class Contactlist extends Component {
  render() {

    // an array of objects
    const people = this.props.contacts;

    // return jsx generated from array of objects above
    // please note that it is considered good practice to wrap multiline jsx within paranthesis
    return (
      <ol>
        {
          people.map(
            person => <li key={person.name}>{person.name}</li>
          )
        }
      </ol>
    )
  }
}


/** 
 * Main application component
 * ... please note that `render` is the only compulsory function
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Contactlist contacts={[
          { name: 'Tyler' },
          { name: 'Karen' },
          { name: 'Richard' }
        ]} />
        <Contactlist contacts={[
          { name: 'Amanda' },
          { name: 'Mikenzi' },
          { name: 'Ryan' }
        ]} />
      </div>
    )
  }
}


/**
 * Default application component
 */
// function App() {
//   return (
//     <div className="App">
//       <Contactlist />
//     </div>
//   );
// }


export default App;
