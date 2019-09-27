import React, { useState, useEffect } from "react";
import "./App.css";

function App(props) {
  console.log(props);
  // Declare a new state variable, which we'll call "count"
  const [count, setCounts] = useState(0);
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `React ${count}`;
  });

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <p>You clicked {todos.length} times</p>
      <button onClick={() => setCounts(count + 1)}>Click me</button>
      <button onClick={() => setTodos(todos => [...todos, { hola: "new" }])}>
        Click
      </button>
    </div>
  );
}

export default App;
