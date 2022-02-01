import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();

    React.useEffect(() => {
        let userName = localStorage.getItem('user-data-collector-user');

        if (userName !== '') {
            navigate('/home')

        }


    }, [])

    const [loginInfo, setLoginInfo] = React.useState({})
    const form = React.useRef(null)
    // const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo)

    }
    const handleLogin = (e) => {
        // console.log(product)
        // send data to the server
        if (loginInfo.userName === 'admin@namasys.co' && loginInfo.password === 'admin123') {
            localStorage.setItem('user-data-collector-user', 'admin@namasys.co')
            navigate('/home')

        } else {
            alert('incorrect user or password')

            form.current.reset();
        }


        e.preventDefault()
    }


    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: '#fff8f8', width: '600px', marginTop: '100px', padding: '30px', borderRadius: '40px' }}>
            <h1 style={{ color: 'red' }}>Login</h1>



            <form
                ref={form}
                onSubmit={handleLogin}>

                <TextField
                    required
                    sx={{ width: '90%', m: 2 }}
                    label="Username"
                    variant="standard"
                    name='userName'
                    onBlur={handleOnBlur} />

                <TextField
                    required
                    sx={{ width: '90%', m: 2 }}
                    label="Password"
                    variant="standard"
                    name='password'
                    type='password'
                    onBlur={handleOnBlur} />



                <button

                    style={{ marginTop: 20, width: '90%', backgroundColor: '#FEEAEB', color: 'red', padding: '10px', borderRadius: '15px', cursor: 'pointer', fontSize: '20px' }} type='submit'>LOGIN</button>

            </form>


        </div>
    </div>;
}
