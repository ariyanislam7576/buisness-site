import { Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://immense-crag-91398.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div>
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
           <input 
            type='email'
            placeholder='Enter email'
             onBlur={handleOnBlur}></input>
           <button type='submit'>Make Admin</button>
        </form>
        {success && <Alert severity="success">This is a success alert — check it out!</Alert>
}
    </div>
    );
};

export default MakeAdmin;