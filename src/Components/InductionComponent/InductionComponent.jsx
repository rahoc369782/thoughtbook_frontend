import React from 'react'
import Tlogo from "../../Assets/Visuals/Tlogo.svg"
import "./InductionComponent.scss"

function InductionComponent() {
    return (
        <div className='induction_container'>
            <div className='induction_subcontainer'>
            <div className='induction_logo_container'>
                    <img src={Tlogo} />
                </div>
                <div className='induction_header'>
                   <h3>Thoughtbook</h3> 
                </div>
                <div className='induction_quotes'>
                    Thoughtpages are waiting for your thoughts
                </div>
            </div>
        </div>
    )
}

export {InductionComponent}
