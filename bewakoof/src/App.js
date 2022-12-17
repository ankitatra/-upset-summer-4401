import logo from './logo.svg';
import './App.css';
import MainRoutes from "./MainRoutes/MainRoutes"
import { Men } from './Pages/Men';
import Navbar from './Components/Navbar';
import { Signup } from './Pages/Signup';

function App() {



  return (

     <div className="App">
    <MainRoutes />
    {/* <Signup/> */}
    </div>



  );

  }

export default App;
