import logo from './logo.svg';
import './App.css';
import { Signupd } from './Comp/Signupd';
import { Signup } from './Pages/Signup';
import { Men } from './Pages/Men';
import Navbar from './Components/Navbar';
import { OtpModalF } from './Comp/OtpModalF';
import { OtpS } from './Comp/OtpS';
import { Login } from './Pages/Login';


function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Signupd/> */}
      {/* <Login/> */}
      {/* <OtpModalF/> */}
      <OtpS/>
    </div>
  );
}

export default App;
