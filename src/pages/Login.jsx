import { useState, useEffect } from "react";
import useToken from "../Hook/useToken";
import { NavLink } from "react-router-dom";

// image
import Facebook from "../Assets/facebook.png";

export default function Login(){

    const [ token, setToken ] = useToken()
    const [ email, setEmail ] = useState("")
    const [ password , setPassword ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(res => res.json())
        .then(data => setToken(data.token))
    }
 
    return(
        <section className="section__login">
           <div className="container">
               <div className="login">
                   <div className="login__head--box">
                       <h2 className="login__box--head">Kirish</h2>
                       <div className="images">
                            <img className="images__facebook" src={Facebook} alt="" />
                            <i className='bx bxl-apple'></i>
                            <i className='bx bxl-google'></i>
                        </div>    
                    </div>
                   <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                       <div className="form__input">
                           <label className="form__label">Name</label>
                           <input className="input" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                       </div>
                       <div className="form__input">
                           <label className="form__label">Email</label>
                           <input className="input" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                       </div>
                       <div className="form__input">
                            <label className="label">Password</label>
                            <input className="input" type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                       </div>
                       <div className="button__box">
                           <a className="btn__link" href="">Forgot Password?</a>
                           <NavLink className={'btn__link2'} to={'/dashboard'}><button className="form__btn" type="submit">Log In</button></NavLink>
                       </div>
                   </form>
               </div>
           </div>
        </section>
    )
}