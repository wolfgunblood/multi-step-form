import React from 'react';
import "./Plan.scss"
import ButtonPlan from '../ButtonPlan/ButtonPlan';
import iconArcade from "../../assets/images/icon-arcade.svg"
import iconAdvanced from "../../assets/images/icon-advanced.svg"
import iconPro from "../../assets/images/icon-pro.svg"

const Plan = () => {

    const btn = [
        {
            name: "Arcade",
            icon: iconArcade,
            price: "$9/mo",
        },
        {
            name: "Advanced",
            icon: iconAdvanced,
            price: "$12/mo",
        },
        {
            name: "Pro",
            icon: iconPro,
            price: "$15/mo",
        },
    ]
    return (
        <div className='plan-container'>
            <h2>Select Your Plan</h2>
            <p>You have the option of monthy or yearly billing</p>
            <div className='plan-btns'>

                {btn.map((item, index) => (

                    <ButtonPlan key={index} item={item} />
                    // console.log(item)
                ))}

            </div>
        </div>
    )
}

export default Plan