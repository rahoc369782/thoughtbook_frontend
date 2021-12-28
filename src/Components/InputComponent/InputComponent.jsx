import React from 'react'
import "./InputComponent.scss"
function InputComponent({ callback, style, placeholder, disable }) {
    return (
        <div className='login_input_container'>
            <div className='login_input_subcontainer'>
                <input disabled={disable ? disable : false} type='text' placeholder={placeholder} onChange={(e) => callback ? callback(e.target.value) : null} />
            </div>
        </div>
    )
}

export { InputComponent }
