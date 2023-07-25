import logo from './logo.svg';
import './App.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const counter = useSelector((state) => state.counter)
  return (
    <div className="App">
      hello world
      <h2>Counter is {counter} </h2>
    </div>
  );
}

export default App;
