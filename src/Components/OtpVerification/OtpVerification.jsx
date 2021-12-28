import React, { useState } from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";
import "./OtpVerification.scss"

function OtpVerification() {
    const [OTP, setOTP] = useState("");
    return (
        <>
            <OTPInput placeholder={[0, 0, 0, 0, 0]} value={OTP} style={{ display: 'flex', justifyContent: 'space-between', }} inputStyles={{ border: '0.5px solid #D3D3D3', marginRight: 0, fontWeight: 'bold', borderRadius: 4, padding: 5, fontSize: 14, outline: 'none' }} onChange={setOTP} autoFocus OTPLength={5} otpType="number" disabled={false} secure />
            <ResendOTP className='resend_otp_btn' onResendClick={() => console.log("Resend clicked")} />
        </>
    );
}

export { OtpVerification }
