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
        // console.log(product)
        // send data to the server
        fetch('https://user-data-collector.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User Added')
                    // setIsChanged(!isChanged)
                    form.current.reset();

                }
            })
        e.preventDefault()
    }

    const handleAlphabetsFilter = (e) => {
        let regex = /^[a-zA-Z]*$/;
        if (regex.test(e.target.value)) {

        }
        else {
            e.target.value = ""
            // e.target.value = s.slice(0, -1)
            alert('Alphabets Only')

        }
    }
    const handleNumberFilter = (e) => {
        let s = e.target.value
        let len = s.length
        if (len > 10) {
            alert('10 Number Allowed');
            e.target.value = ''

        }
    }

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        <div style={{ width: '500px' }}>
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
                    // helperText={error ? "Alphabets Only" : ""}
                    onBlur={handleOnBlur}
                    onKeyUp={handleAlphabetsFilter}
                    pattern='[A-Za-z\\s]*'
                />

                <TextField
                    required
                    sx={{ width: '90%', m: 2 }}
                    label="Mobile"
                    variant="standard"
                    name='number'
                    type='number'
                    onKeyUp={handleNumberFilter}
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