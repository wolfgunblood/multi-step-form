import React from 'react';
// import {ReactComponent as sidebarBg } from '../../assets/images/bg-sidebar-desktop.svg';
import './SideBar.scss';
import Item from '../Item/Item';

const SideBar = () => {

    const data = ["Your Info", "Select Plan", "Add Ons", "Summary"]
    return (
        <div className='sidebar-container'>
            {data.map((item, index) => (
                <Item item={item} key={index} i = {index}/>
            ))}
        </div>
    )
}

export default SideBar