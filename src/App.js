import './App.css';
import { useState , useEffect} from 'react'
import db from "./firebase";

function App() {
  const [todo, settodo] = useState([])
  const [input, setinput] = useState('')

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      settodo(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [input])

  const addInput = (event) => {
      event.preventDefault();
      db.collection('todos').add({
        todo: input
      })
      settodo([...todo,input]);
      setinput('');
  }

  return (
    <div className="App">
      <h1>TO-DO APP</h1>
     <form  className="inputArea">
      <input type="text" value={ input } onChange={event => setinput(event.target.value)} placeholder="Enter To-Do Activity" size="30"/>
      <button disabled={!input} type="submit" onClick={addInput}>ADD TODO</button>

      { todo.map(todos => (
        <ul className="listElements">
          <li><b>{todos}</b></li>
        </ul>
      )) }

      </form> 
    </div>
  );
}

export default App;
