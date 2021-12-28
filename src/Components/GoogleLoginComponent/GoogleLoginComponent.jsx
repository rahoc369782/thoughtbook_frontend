import React from 'react'
import google from "../../Assets/Visuals/Google.svg"
import "./GoogleLoginComponent.scss"
function GoogleLoginComponent() {
    return (
        <div className='google_login_container'>
            <div className='google_login_subcontainer'>
                <img src={google} />
                <span>Continue with Google</span>
            </div>
        </div>
    )
}

export {GoogleLoginComponent}
