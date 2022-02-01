import { Alert, Button, Container, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// import CreateIcon from '@mui/icons-material/Create';

export default function AllUser() {


    const [users, setUsers] = useState([]);
    //   snake bar
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    // end

    const handleRemove = id => {
        if (window.confirm("Are You Sure Want to Delete") === true) {

            const url = `https://user-data-collector.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                    if (data.deletedCount) {
                        setOpen(true)
                        const remaining = users.filter(cart => cart._id !== id);
                        setUsers(remaining)
                    }
                })

        } else {
            alert('Deleted cancel')

        }


    }

    useEffect(() => {

        fetch('https://user-data-collector.herokuapp.com/user')
            .then(res => res.json())
            .then(data => {
                setUsers(data)

            })

    }, [])

    return <Container>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                User Deleted
            </Alert>
        </Snackbar>
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Appointments table">
                <TableHead>
                    <TableRow>

                        <TableCell>User Name</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Address</TableCell>

                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.userName}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.number}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.email}
                            </TableCell>
                            <TableCell align="right">{row.address}</TableCell>

                            <TableCell align="right">
                                {/* <Button onClick={() => handleOpenU(row)}><CreateIcon /></Button> */}
                                <Button onClick={() => handleRemove(row._id)} style={{ color: 'red' }}><DeleteIcon /></Button></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </Container>;
}
