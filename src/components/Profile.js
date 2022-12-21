import React from 'react'
import { json } from 'react-router-dom';
import { Login } from './Login';




 const Profile = () => {
    return (
        <section>
            <h1>
                Welcome
            </h1>
            <p>{json.data.username}</p>
        </section>
    )
}

export default Profile;
 