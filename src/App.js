import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>New person</h4>
      {Input()}
      <h4>All persons</h4>
      {Output()}
    </div>
  );
}

let names = [
  { key: "1", name: "Magnus" },
  { key: "2", name: "Joakim" },
  { key: "3", name: "Rasmus" },
]
let newName;

function Input() {
  return (
    <div>
      <form onSubmit={inputSubmit}>
        <input type="text" name="name" placeholder="name" value={newName} onChange={inputChange}></input>
        <input type="submit" value="Save"></input>
      </form>
    </div>
  )
}

function inputChange(data) {
  newName = data.value
}

function inputSubmit(data) {
  let newKey = names.length+1
  names.push(
    { key: newKey, name: newName }
  )
}

function Output() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name => <tr><td>{name.name}</td></tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
