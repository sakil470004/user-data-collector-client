import { Alert, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function Home() {
    const [userData, setUserData] = useState({})
    const form = React.useRef(null)
    //   snake bar
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    // end

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData)
    }


    const handleAddUser = (e) => {
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
                   
                    // setIsChanged(!isChanged)
                    form.current.reset();
                    setOpen(true);
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


            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    User Added
                </Alert>
            </Snackbar>
            <form
                ref={form}
                onSubmit={handleAddUser}>

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