import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Dashboard.css';

// img
import Images2 from "../../Assets/ok.png";
import Images3 from "../../Assets/video.png";
import Carousel from "../../Assets/carousel.png";


export default function Dashboard(){

    // chat

    const [ chat , setChat ] = useState([])

    const  handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(chat);
        fetch(`https://x8ki-letl-twmt.n7.xano.io/api:CQrM5B3q/chat`, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message:chat
            }),
            })
            .then((res) => res.json())
            .then((err) => console.log(err)) 
    
    }

    return(
       <section className="dashboard__box">
          <section className='dashboard__section'>
            <div className="container">
            <div className="dashboard">
               <Link className="header__logo--link" to={'/'}><h1 className="header__logo logo">Star<span className="header__span">hub</span></h1></Link>
                <ul className='dashboard__list'>
                    <li className='dashboard__item'><NavLink to={'/dashboard'} className="dashboard__link"> <i className='bx bxs-home'></i></NavLink></li>
                    <li className='dashboard__item'><NavLink to={'/vacancy'} className="dashboard__link"><i className='bx bx-shopping-bag'></i></NavLink></li>
                    <li className='dashboard__item'><NavLink to={'/mockup'} className="dashboard__link"><i className='bx bxl-zoom'></i></NavLink></li>
                </ul>
            </div>
            </div>
         </section>
         <section>
             <div className="container">
              <div className="dashboard__wrapper">
                 <div className="dashboard__left">
                    <div className="dashboard__box">
                     <ul className="box__list">
                         <li className="box__item">
                             <img className="box__item--img" src={Images2} width={20} height={20} alt="" />
                             <p className="box__item--title">Kirish. Flutter haqida.</p>
                         </li>
                         <li className="box__item">
                             <img className="box__item--img" src={Images3} width={20} height={20} alt="" />
                             <p className="box__item--title2">Android SDK va Flutterni o’rnatish</p>
                         </li>
                         <li className="box__item">
                             <img className="box__item--img" src={Images3} width={20} height={20} alt="" />
                             <p className="box__item--title2">Android SDK va Flutterni o’rnatish</p>
                         </li>
                        
                     </ul>
                 </div>

                 {/* CAROUSEL */}
                 <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                       <div class="carousel-item active">
                           <img className="d-block" src={Carousel} width={930} height={650} alt="carousel-img" />
                       </div>
                        <div class="carousel-item">
                           <img className="d-block" src={Carousel} width={930} height={650} alt="carousel-img" />
                        </div>
                        <div class="carousel-item">
                           <img className="d-block" src={Carousel} width={930} height={650} alt="carousel-img" />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon iconcha2" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon iconcha" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                 </div>
                 <div className="dashboard__rights">
                    <form onSubmit={(e) =>  handleSubmit(e)} className="dashboard__form">
                        <input className="form___input" type="text" placeholder="Your message" onChange={(e) =>  setChat(e.target.value)} />
                        <button className="form__button btn" type="submit"><i className='bx bxl-telegram' ></i></button>
                    </form> 
                 </div>
                </div>
             </div>
         </section>
       </section>
    )
}