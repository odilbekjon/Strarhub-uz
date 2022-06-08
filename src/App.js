import { Route, Routes } from "react-router-dom";
import './App.css';
import useToken from './Hook/useToken';

// components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Vacancy from "./components/Vacancy/Vacancy";
import Mockup from "./components/Mockup/Mockup";
import Help from "./components/Help/Help";
import Login from './pages/Login';

function App() {

  const  [ token ] = useToken()

  // if(token) {
  //   return <Dashboard/>
  // }else {
  //   return <Login/>
  // }
  
  return(
    <>
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/vacancy' element={<Vacancy/>}/>
            <Route path='/mockup' element={<Mockup/>} />
            <Route path='/help' element={<Help/>}/>
       </Routes>
   </>
)

}

export default App;
