import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SajjadNavBar from './Components/SajjadNavBar';
import SajjadPages from './Pages/SajjadPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SajjadNavBar></SajjadNavBar>
        <SajjadPages></SajjadPages>
      </BrowserRouter>
    </div>
  );
}

export default App;
