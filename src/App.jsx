// import './App.css';
import {foods} from './data';
import Food from './Food';

function App() {

  return (
    <div className="App">
      <div>
        <Food data={foods}/>
      </div>
    </div>
  )
}

export default App
