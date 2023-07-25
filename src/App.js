import logo from './logo.svg';
import './App.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment =() => {
      dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addby = () => {
    dispatch(actions.addby(10))
  }
  return (
    <div className="App">
      hello world
      <h2>Counter is {counter} </h2>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <button onClick={addby}>Add by 10</button>
    </div>
  );
}

export default App;
