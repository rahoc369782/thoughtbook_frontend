import React from 'react'
import "./ButtonComponent.scss"
function ButtonComponent({ callback, btncolor, btn_container_color }) {
    return (
        <div style={{ background: !btn_container_color ? btn_container_color : '#757575' }} className='t_btn_container'>
            <div className='t_btn_subcontainer'>
                <button style={{ color: btncolor ? btncolor : 'black' }} onClick={() => callback ? callback() : null} >Continue</button>
            </div>
        </div>
    )
}

export { ButtonComponent }
