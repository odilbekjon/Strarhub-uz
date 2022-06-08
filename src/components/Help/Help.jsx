import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Help.css';

export default function Help(){
    return(
        <section className="dashboard__box">
          <section className='dashboard__section'>
            <div className="container">
            <div className="dashboard">
              <Link className="header__logo--link" to={'/'}><h1 className="header__logo logo">Star<span className="header__span">hub</span></h1></Link>  
                <ul className='dashboard__list'>
                    <li className='dashboard__item'><NavLink to={'/dashboard'} className="dashboard__link"> <i className='bx bxs-home'></i></NavLink></li>
                    <li className='dashboard__item'><NavLink to={'/vacancy'} className="dashboard__link"><i class='bx bx-shopping-bag'></i></NavLink></li>
                    <li className='dashboard__item'><NavLink to={'/mockup'} className="dashboard__link"><i className='bx bxl-zoom'></i></NavLink></li>
                    <li className='dashboard__item'><NavLink to={'/help'} className="dashboard__link"><i className='bx bx-help-circle' ></i></NavLink></li>
                </ul>
                </div>
            </div>
         </section>
         <section>
             <div className="container">
                 <h1>Help</h1>
             </div>
         </section>
       </section>
    )
}