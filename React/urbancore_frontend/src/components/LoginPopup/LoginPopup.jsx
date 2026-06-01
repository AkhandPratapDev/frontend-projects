// import React, { useState } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'

// const LoginPopup = ({setShowLogin}) => {

//   const [currentState,setCurrentState] = useState("Sign Up")

//   return (
//     <div className='login-popup' id='login-popup'>
//       <form className="login-container">
//         <img src={assets.login_poster} alt="" className='login-popup-poster' />

//         <div className="login-main-container">
//           <div className="login-popup-title">
//             <h2>{currentState}</h2>
//             <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
//           </div>
//           <div className="login-popup-inputs">
           
//             {currentState==="Login"? <></>:<input 
//   type="tel" 
//   placeholder="Your mobile" 
//   maxlength="10"
//   oninput="this.value = this.value.replace(/[^0-9]/g, '')"
//   required 
// />}
//             <input type="email" placeholder='Your email' required />
//             <input type="password" placeholder='Your Password' required />
//           </div>
//           <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
//           <div className="login-popup-condition">
//             <input type="checkbox"  required/>
//             <p>By Continuing, i agree to the terms of use & privacy policy.</p>
//           </div>
//           {currentState==="Login" 
//           ? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span> </p>
//           :  <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
//           }
         
         
//         </div>
//       </form>
//     </div>
//   )
// }

// export default LoginPopup






import React, { useState, useEffect } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up")

  useEffect(() => {
    // store the scroll position when popup opens
    const initialScroll = window.scrollY

    const handleScroll = () => {
      if (window.scrollY !== initialScroll) {
        setShowLogin(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [setShowLogin])

  return (
    <div className='login-popup' id='login-popup'>
      <form className="login-container">
        <img src={assets.login_poster} alt="" className='login-popup-poster' />

        <div className="login-main-container">
          <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>

          <div className="login-popup-inputs">
            {currentState === "Login" ? null : (
              <input
                type="tel"
                placeholder="Your mobile"
                maxLength="10"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                required
              />
            )}
            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="Your Password" required />
          </div>

          <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>

          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
