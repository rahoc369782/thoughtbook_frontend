import React, { Component } from 'react'
import "./RegisterPage.scss";
import { InputComponent } from "../../Components/InputComponent/InputComponent"
import { ButtonComponent } from "../../Components/ButtonComponent/ButtonComponent"
import { GoogleLoginComponent } from "../../Components/GoogleLoginComponent/GoogleLoginComponent"
import { InductionComponent } from "../../Components/InductionComponent/InductionComponent"
import { OtpVerification } from "../../Components/OtpVerification/OtpVerification";
import { SearchPage } from "../SearchPage/SearchPage"
import Drawer from '@mui/material/Drawer';


class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchor: true
        }
    }
    render() {
        return (
            <div className='register_container'>
                <div className='register_subcontainer'>
                    <InductionComponent component='register' />
                    <InputComponent disable={true} placeholder="Enter email" />
                    <div style={{ marginTop: 10 }}>
                        <OtpVerification />
                    </div>
                    <ButtonComponent callback={() => this.setState({ anchor: true })} btncolor="white" />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <hr style={{ width: '20%' }} />
                        <h4>Or</h4>
                        <hr style={{ width: '20%' }} />
                    </div>

                    {/* Google Login */}
                    <div>
                        <GoogleLoginComponent />
                    </div>

                    {/* Singnup Options */}
                    <div className='login_singnup_opt_container'>
                        <label className='login_singnup_opt_subcontainer'>
                            Already using Thoughtbook? <span>Sign in here</span>
                        </label>
                    </div>

                    {/* Terms and conditions */}

                    <div className='login_singnup_opt_container'>
                        <label className='login_singnup_opt_subcontainer'>
                            By proceeding , I agree to<span>T&C</span> and <span>privacy policy</span>
                        </label>
                    </div>

                    <Drawer
                        anchor='right'
                        open={this.state.anchor}
                        onClose={() => this.setState({ anchor: false })}
                    >
                        <SearchPage />
                    </Drawer>
                </div>
            </div>
        )
    }
}

export { RegisterPage }
