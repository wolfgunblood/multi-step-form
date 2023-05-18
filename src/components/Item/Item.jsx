import React from 'react';
import "./Item.scss";

const Item = ({item,i}) => {
  return (
    <div className='item-container'>
        <div className='item-number'>{i}</div>
        <div className='item-content'>
            <div>{`STEP ${i}`}</div>
            <div>{item}</div>
        </div>
    </div>
  )
}

export default Item