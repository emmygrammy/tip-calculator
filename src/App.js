import logo from './logo.svg';
import './App.css';
import Bill from './component/Bill'
import TotalService from './component/Service'




function App() {
  return (
    <div className="">
      <Bill />
      <TotalService />

      <div>
      <button>Reset</button>
    </div>
    </div>
    
  );
}

export default App;
