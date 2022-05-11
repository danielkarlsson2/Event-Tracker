import './App.css';
import Header from './components/Header';
import Events from './components/Events';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
     {/* <Views /> */}
      <Header />
        <Routes>
          <Route path='/' element={<Events />} />
        </Routes>
     
    </div>
  );
}

export default App;
