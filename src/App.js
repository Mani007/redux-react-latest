import logo from './logo.svg';
import './App.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment =() => {
      dispatch({type: 'INC'})
  }
  const decrement = () => {
    dispatch({type: 'DEC'})
  }
  return (
    <div className="App">
      hello world
      <h2>Counter is {counter} </h2>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
