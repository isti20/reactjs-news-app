import './App.css';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <News />
    </div>
  );
}

export default App;
