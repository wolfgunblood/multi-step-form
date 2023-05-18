import React from 'react'

const Item = ({item,i}) => {
  return (
    <div>
        <div>{i}</div>
        <div>
            <h5>{`STEP ${i}`}</h5>
            <h5>{item}</h5>
        </div>
    </div>
  )
}

export default Item