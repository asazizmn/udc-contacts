import React from 'react';


class Contactlist extends React.Component {
  render() {

    // an array of objects
    const people = [
      { name: 'Tyler' },
      { name: 'Karen' },
      { name: 'Richard' }
    ]

    // return jsx generated from array of objects above
    // please note that it is considered good practice to wrap multiline jsx within paranthesis
    return (
      <ol>
        {
          // please note the implicit return from es6 function using `()` parathesis
          people.map(person =>
            <li key={person.name}>{person.name}</li>
          )
        }
      </ol>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
      </header>
    </div>
  );
}

export default App;
