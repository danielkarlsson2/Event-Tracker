import './App.css';
import Header from './components/Header';
import Views from './views/Views';

import CreateView from './views/CreateView';


function App() {



  return (
    <div className="App">
      <Header />
        <div className="container">
            <Views />
        </div>       
    </div>
  );
}

export default App;
