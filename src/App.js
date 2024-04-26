import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner/Banner';
import SelectPage from './Components/SelectPage/SelectPage';
import Controlpage from './Components/ControlPage/Controlpage';
function App() {
  return (
    <div className="App">
       <Banner/>
       <SelectPage/>
       <Controlpage/>
    </div>
  );
}

export default App;
