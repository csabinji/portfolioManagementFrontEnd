import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Body from './components/body';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navigation /> <br />
      <Body />
    </div>
  );
}

export default App;
