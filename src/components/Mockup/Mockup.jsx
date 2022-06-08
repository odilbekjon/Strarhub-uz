import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Mockup.css';

// images
import Business from "../../Assets/business-meeting1.png";
import MeetingCall from "../../Assets/video-call1.png";
import Calendar from "../../Assets/calendar--image.png"

export default function Mockup(){
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
                    
                </ul>
                </div>
            </div>
         </section>
         <section>
             <div className="container">
                 <div className="mockup">
                     <h2 className="mockup__head">There are many variations of passages</h2>
                     <p className="mockup__title">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                     <ul className="mockup__list">
                         <li className="mockup__item">
                             <div className="item__box">
                             <img className="mockup__item--img" src={MeetingCall} width={381} height={188} alt="" />
                             <h3 className="item__number">1</h3>
                             </div>
                             <h3 className="mockup__item--head">There are many variations of passages</h3>
                             <div className="mockup__box">
                             <p className="mockup__item--text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                             Schedule a call
                              </button>
                             </div>
                         </li>
                         <li className="mockup__item">
                             <div className="item__box">
                             <img className="mockup__item--img" src={MeetingCall} width={381} height={188} alt="" />
                             <h3 className="item__number">2</h3>
                             </div>
                             <h3 className="mockup__item--head">There are many variations of passages</h3>
                             <div className="mockup__box">
                             <p className="mockup__item--text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                             {/* <button className="mockup__item--btn">Schedule a call</button> */}
                             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                             Schedule a call
                              </button>
                             </div>
                         </li>
                     </ul>
                     <ul className="mockup__list">
                         <li className="mockup__item2">
                            <div className="item__box2">
                                <h3 className="mockup__item--head">There are many variations  there are many variations of passagesof passages</h3>
                                <p className="mockup__item--text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.</p>
                                <button className="mockup__item--btn2">Schedule a call</button>
                            </div>
                               <img className="mockup__item--img2" src={Business} width={581} height={188} alt="" />
                         </li>
                     </ul>
                     {/* modal */}
                     
                        

                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">There are many variations  there are many variations</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-footer">
                                <img className="modal__img" src={Calendar} width={350} alt="" />
                                <a className="modal__link" href="https://us05web.zoom.us/s/83831219852?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6InAwd2tJZkh1U0Z1aHQzZWIzZW4tOXciLCJpc3MiOiJ3ZWIiLCJzayI6IjAiLCJzdHkiOjEsIndjZCI6InVzMDUiLCJjbHQiOjAsIm1udW0iOiI4MzgzMTIxOTg1MiIsImV4cCI6MTY1NDQyNTEzMSwiaWF0IjoxNjU0NDE3OTMxLCJhaWQiOiI3RENDTExuZ1FlMmg1NmxTUjJzaDd3IiwiY2lkIjoiIn0.JvibJoFXnMR7032HPuBC8eK2L4crVKzRPZbnNihfYgM" target={'_blank'}>Schedule a call</a>
                            </div>
                            </div>
                        </div>
                        </div>
                 </div>
             </div>
         </section>
       </section>
    )
}