import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Rules from './components/Rules';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Content />
      <Rules />
    </div>
  );
}

export default App;
