import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Vacancy.css';

// images
import VacancyImg from "../../Assets/vacancy.png";
import VacancyImg2 from "../../Assets/vacancy-img.png";

const data = [
    {
        id:1,
        name:"Internship",
        description:"• 4-year student;\n• Basic knowledge of IT and Software Development Life Cycle;\n• Knowledge of English at a professional level (preferably IELTS 7.0 +);\n• Desire to learn and  be enthusiastic about earning practical knowledge and experience in IT company with International Projects.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:2,
        name:"Senior Full-Stack",
        description:"You will need to have:\n- Excellent verbal and written communication English skills (!);\n- Basic knowledge of HTML/CSS;\n- Basic understanding of Git;\n- Basic knowledge of JavaScript and programming concepts.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:3,
        name:"Middle+ Front-end",
        description:"We are currently looking for a Front-end Software Engineer for our Tashkent office with deep knowledge of Angular 2+ and Node.js to join our team.\nYou will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:4,
        name:"Middle Full-Stack",
        description:"•Knowledge about the work process in IT company;\n• Professional skills that will be handy for the future IT career development;\n• Applied theoretical knowledge to solve specific problems;\n• Possibility to grow professionally;\n• Invaluable experience with real International projects;\n• Work with young and friendly team.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:5,
        name:"Internship Middle",
        description:"- Automation of RESTful API (mostly) and UI testing\n- Test script preparation (test design), maintenance of automated test libraries\n - Launching automated tests, analyzing test results on different environments CI support\n- Interacting with the development team when\n- Composing test cases and in the process\n- Fixing defects\n- Planning quality control activities, estimating time spent on assigned tasks\n",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:6,
        name:"Junior Front-end",
        description:"-Good knowledge about theory of testing\n-Good understanding and the skill of applying the testdedsign technics\n-Good understanding of the client-server architecture of the appication\n-Experience in API testing\n-Experience with dev tools\n-Experience and the skill work with Database \n-Good communication skills\n-Team player",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:7,
        name:"nternship",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:8,
        name:"Senior Full-Stack",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:9,
        name:"Middle+ Front-end",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:10,
        name:"Middle Full-Stack",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:11,
        name:"Internship Middle",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        title:"Start calculating",
        image:VacancyImg
    },
    {
        id:12,
        name:"Internship Senior",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        title:"Start calculating",
        image:VacancyImg
    }
]

export default function Vacancy(){

    // data - vacancy
    // const [ data, setData ] = useState([])

    // useEffect(() => {
    //     fetch('https://starhub-uz.herokuapp.com/api/Jobs',{
    //         method:"GET",
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])


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
               <div className="vacancy">
                   <h1 className="vacancy__head">There are many variations of passages</h1>
                   <p className="vacancy__text">A platform that automatically calculates the Islamic Sharia</p>
                   <ul className="vacancy__list">
                       {
                           data.map(item => {
                               return(
                                   <li key={item.id} className="vacancy__item">
                                       <div className="img__box">
                                       <img className="item--img" src={item.image}  height={178} alt="" />
                                       </div>
                                       <h2 className="item--name">{item.name}</h2>
                                       <p className="item--head">{item.description}</p>
                                       <div className="wrapper__btn">
                                         <img className="btn--img" src={VacancyImg2} width={45} height={45} alt="" />
                                         <button className="item--btn"> {item.title}</button>
                                       </div>
                                   </li>
                               )
                           })
                       }
                   </ul>
               </div>
           </div>
       </section>
     </section>
    )
}