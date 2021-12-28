import React, { Component } from 'react'
import "./LoginPage.scss";
import {InputComponent} from "../../Components/InputComponent/InputComponent"
import {ButtonComponent} from "../../Components/ButtonComponent/ButtonComponent"
import {GoogleLoginComponent} from "../../Components/GoogleLoginComponent/GoogleLoginComponent"
import {InductionComponent} from "../../Components/InductionComponent/InductionComponent"
class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    toggle_theme = () => {
        if(document.querySelector('body').classList[0] === '_t_regular_theme') {
            document.querySelector('body').classList.remove('_t_regular_theme')
            return document.querySelector('body').classList.add('_t_dark_theme')
        }

        document.querySelector('body').classList.remove('_t_dark_theme')
        return document.querySelector('body').classList.add('_t_regular_theme')
    }
    render() {
        return (
            <div className='login_container'>
                <InductionComponent />
                <InputComponent placeholder="Enter email or username" />
                <InputComponent placeholder="Password" />
                <ButtonComponent callback={this.toggle_theme} btncolor="white" />
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <hr style={{width:'20%'}}/>
                    <h4>Or</h4>
                    <hr style={{width:'20%'}}/>
                </div>

                {/* Google Login */}
                <div>
                    <GoogleLoginComponent />
                </div>

                {/* Singnup Options */}
                <div className='login_singnup_opt_container'>
                    <label className='login_singnup_opt_subcontainer'>
                        New in Thoughtbook? <span>Sign up here</span>
                    </label>
                </div>
            </div>
        )
    }
}

export {LoginPage}
