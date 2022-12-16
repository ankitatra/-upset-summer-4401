import logo from './logo.svg';
import './App.css';
import { Men } from './Pages/Men';
import Navbar from './Components/Navbar';





import MainRoutes from "./MainRoutes/MainRoutes"

function App() {



  return (

     <div className="App">
    <MainRoutes />
      <Men/>
    </div>



  );

  }

export default App;
