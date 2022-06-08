import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Home.css';

// images
import Img1 from "../../Assets/i.png";
import Img3 from "../../Assets/btn-img.png";
import Img4 from "../../Assets/hero-img.png";
import Img5 from "../../Assets/footer-img1.png"; 
import Img6 from "../../Assets/footer-img2.png"; 
import Image1 from "../../Assets/image7.png"; 
import Image2 from "../../Assets/image8.png"; 
import Image3 from "../../Assets/image9.png"; 
import Image4 from "../../Assets/image10.png"; 
import Image5 from "../../Assets/image11.png"; 
import Image6 from "../../Assets/image12.png";
import Image7 from "../../Assets/YearlySales.png";

import Interview from "../../Assets/interview.webp";
import Interview2 from "../../Assets/interview-second.webp";
import Interview3 from "../../Assets/interview-fourth.webp";
import Interview4 from "../../Assets/interview-thid.webp";


export default function Home(){

    return(
        <>
          <section className="header__section">
            <div className="container">
               <header className="header">
                   <Link className="header__logo--link" to={'/'}><h1 className="header__logo logo">Star<span className="header__span">hub</span></h1></Link>
                   <ul className="header__list">
                       <li className="header__item"><Link className="header__link" to={'/'}>Home</Link></li>
                       <li className="header__item"><Link className="header__link" to={'/'}>About us</Link></li>
                       <li className="header__item"><Link className="header__link" to={'/'}>Contact us</Link></li>
                   </ul>
                   <div className="header__right">
                        
                        <button className="header__btn"><NavLink className={'header__btn--link'} to={'/dashboard'}> <img className="btn-img" src={Img3} width={20} height={20} alt="img" /> Login</NavLink></button>
                   </div>
               </header>
            </div>
          </section>
          <section className="hero__section">
              <div className="container">
                  <div className="hero">
                      <div className="hero__left">
                           <h2 className="hero__head">Accelerate business using software development.</h2>
                           <p className="hero__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                           <button className="hero__btn">Order a website</button>
                      </div>
                      <div className="hero__right">
                          <img src={Img4} width={600} height={500} alt="" />
                      </div>
                  </div>
                  <div className="hero__button">
                      <span className="hero__button--head">Trusted by 50+ businesses</span>
                      <div className="hero__button--img">
                          <img className="hero__button--img1" src={Image1} width={140} height={50} alt="facebook" />
                          <img className="hero__button--img1" src={Image2} width={140} height={50} alt="atlassian" />
                          <img className="hero__button--img1" src={Image3} width={140} height={50} alt="shopify" />
                          <img className="hero__button--img1" src={Image4} width={140} height={50} alt="Udemy" />
                          <img className="hero__button--img1" src={Image5} width={140} height={50} alt="Microsoft" />
                          <img className="hero__button--img1" src={Image6} width={140} height={50} alt="Unity" />
                      </div>
                  </div>
              </div>
          </section>
          <section className="main__section">
              <div className="container">
                  <main className="main">

                  <iframe className="main__iframe" width="560" height="315" src="https://www.youtube.com/embed/JlRfIUH8ENw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                   
                      <ul className="main__list">
                          <li className="main__item">
                              <div className="main__item--left">
                                  <img className="main__item--img" src={Interview} width={350} height={300} alt="img" />
                              </div>
                              <div className="main__item--right">
                                  <h2 className="main__item--head">There are many variations of passages</h2>
                                  <p className="main__item--text">A platform that automatically calculates the distributionof inheritance that is obligatory for Muslims based on Islamic Sharia</p>
                              </div>
                          </li>
                          <li className="main__item">
                              <div className="main__item--right2">
                                  <h2 className="main__item--head">There are many variations of passages</h2>
                                  <p className="main__item--text">A platform that automatically calculates the distributionof inheritance that is obligatory for Muslims based on Islamic Sharia</p>
                              </div>
                              <div className="main__item--left">
                                  <img className="main__item--img" src={Interview2} width={350} height={300} alt="img" />
                              </div>
                          </li>
                          <li className="main__item">
                              <div className="main__item--left">
                                  <img className="main__item--img" src={Interview3} width={350} height={300} alt="img" />
                              </div>
                              <div className="main__item--right">
                                  <h2 className="main__item--head">There are many variations of passages</h2>
                                  <p className="main__item--text">A platform that automatically calculates the distributionof inheritance that is obligatory for Muslims based on Islamic Sharia</p>
                              </div>
                          </li>
                          <li className="main__item">
                              <div className="main__item--right2">
                                  <h2 className="main__item--head">There are many variations of passages</h2>
                                  <p className="main__item--text">A platform that automatically calculates the distributionof inheritance that is obligatory for Muslims based on Islamic Sharia </p>
                              </div>
                              <div className="main__item--left">
                                  <img className="main__item--img" src={Interview4} width={350} height={300} alt="img" />
                              </div>
                          </li>
                      </ul>
                      <div className="aside">
                          <div className="aside__left">
                              <img className="aside__left-img1"  src={Img5} width={450} alt="" />
                              <img className="aside__left-img2"  src={Img6} width={450} alt="" />
                          </div>
                          <div className="aside__right">
                              <h3 className="aside__right--head">What's on the shet of our team</h3>
                              <p className="aside__right--title">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical L</p>
                          </div>
                      </div>
                      <div className="wrapper">
                          <img className="wrapper__img" src={Image7} alt="" />
                      </div>
                  </main>
              </div>
          </section>
          <section className="footer__section">
              <div className="container">
              <footer className="footer">
                    <Link className="header__logo--link" to={'/'}><h1 className="header__logo">Star<span className="header__span">hub</span></h1></Link>
                    <ul className="header__list">
                       
                       <li className="header__item"><Link className="header__link" to={'/'}>About us</Link></li>
                       <li className="header__item"><Link className="header__link" to={'/'}>Contact</Link></li>
                   </ul>
                   <div className="footer__imgs">
                        <i className="bx bxl-telegram"></i>
                        <i className="bx bxl-facebook-circle"></i>
                        <i className="bx bxl-instagram-alt"></i>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-linkedin-square'></i>
                   </div>
              </footer>
              </div>
          </section>
        </>
    )
}