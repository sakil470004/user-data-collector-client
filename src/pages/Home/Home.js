import { TextField } from '@mui/material';
import React, { useState } from 'react';

export default function Home() {
    const [userData, setUserData] = useState({})
    const form = React.useRef(null)
    // const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData)
    }
    const handleLogin = (e) => {

        e.preventDefault()
    }
return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'100px' }}>
        <div style={{width:'500px'}}>
            <h1 style={{ color: 'red' }}>Add New User</h1>



            <form
                ref={form}
                onSubmit={handleLogin}>

                <TextField
                    required
                    sx={{ width: '90%', m: 2 }}
                    label="User Name"
                    variant="standard"
                    name='userName'
                    onBlur={handleOnBlur} />

                <TextField
                    required
                    sx={{ width: '90%', m: 2 }}
                    label="Mobile"
                    variant="standard"
                    name='number'
                    type='number'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '90%', m: 2 }}
                    label="Email"
                    variant="standard"
                    name='email'
                    type='email'
                    onBlur={handleOnBlur} />
                <TextField
                    required
                    sx={{ width: '90%', m: 2 }}
                    label="Address"
                    variant="standard"
                    name='address'
                    // helperText={error ? "Name needs to be 'a'" : "Perfect!"}

                    onBlur={handleOnBlur} />



                <button

                    style={{ marginTop: 20, width: '90%', backgroundColor: '#FEEAEB', color: 'red', padding: '10px', borderRadius: '15px', cursor: 'pointer', fontSize: '20px', textTransform: 'uppercase' }} type='submit'>Save User Data</button>

            </form>


        </div>
    </div>


}