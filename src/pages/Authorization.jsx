import { Route, Routes } from "react-router-dom";

// components
import Dashboard from "../components/Dashboard/Dashboard";
import Account from "../components/Mockup";
import Calendar from "../components/Vacany/Vacancy";
import Help from "../components/Help/Help";

export default function Authorization(){
    return(
        <>
        <section className="dashboard">
          <Dashboard/>
           <Routes>
            <Route path='/account' element={<Account/>} />
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/help' element={<Help/>}/>
           </Routes>
        </section>
        </>
    )
}
