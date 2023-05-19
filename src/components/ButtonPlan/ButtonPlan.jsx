import React from 'react';
import "./ButtonPlan.scss";

const ButtonPlan = ({ item }) => {
    const { name, icon, price } = item;
    return (
        <button className='btn-plan'>
            <img src={icon} alt="name" />
            <h4>{name}</h4>
            <p>{price}</p>
        </button>
    )
}

export default ButtonPlan