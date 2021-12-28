import React from 'react'
import Tlogo from "../../Assets/Visuals/Tlogo.svg"
import "./InductionComponent.scss"

function InductionComponent({ component }) {
    if (component === 'login') {
        return (
            <div className='induction_container'>
                <div className='induction_subcontainer'>
                    <div className='induction_logo_container'>
                        <img alt='t_book_logo' src={Tlogo} />
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

    return (
        <div className='induction_container'>
            <div className='induction_subcontainer'>
                <div className='induction_logo_container'>
                    <img alt='t_book_logo' src={Tlogo} />
                </div>
                <div className='induction_header'>
                    <h3>Welcome in your <br /> Thoughtbook</h3>
                </div>
                <div className='induction_quotes'>
                    Single page to know what people thinks.
                </div>
            </div>
        </div>
    )

}

export { InductionComponent }
