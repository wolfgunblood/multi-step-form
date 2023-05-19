import React from 'react';
import "./Personal.scss";

const Personal = () => {
    return (
        <div className='personal-container'>
            <h2>Personal Info</h2>
            <p>Please fill in your name,email and address</p>

            <form>
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" name="name" placeholder='e.g. Stephen King' />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" name="email" placeholder='e.g. stephenking@gmail.com' />
                </label>
                <label htmlFor="passwword">
                    Password
                    <input type="password" id="password" name="password" placeholder='e.g. ********' />
                </label>
            </form>
        </div>
    )
}

export default Personal