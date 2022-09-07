import NavBar from '../NavBar/NavBar';
import "./UserPage.css"
import { Grid } from '@mui/material';
// import { useState } from 'react';
import { Avatar } from "@mui/material";
import { Paper } from '@mui/material';

export function UserPage() {

    // const [current_email, setCurrent_email] = useState('');
    // const [current_password, setCurrent_password] = useState('');
    // const [currentFirstName, setCurrentFirstName] = useState('');
    // const [currentLastName, setCurrentLastName] = useState('');
    // const [currentBirthday, setCurrentBirthday] = useState('');

    // function changeUserInfo() {
    //     let payload = {
    //         "email": current_email,
    //         "password": current_password,
    //         "firstName": currentFirstName,
    //         "lastName": currentLastName,
    //         "birthday": currentBirthday
    //     }
    return(
        <div className="main__container">
            <div className="user__navbar">
                <NavBar />
            </div>
                <Grid className="user__container" container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Paper className="userpage__container">
                            <div className="userpage__header">
                                <Avatar src="https://flyclipart.com/thumb2/jane-doe-cliparts-708896.png"
                                title="Jane Doe"
                                sx={{ width: 150, height: 150}} />
                                <p>Jane Doe</p> 
                            </div>
                            <div>
                                <div className="dividor"></div>
                            </div>
                            <div className="userpage__rows">
                                <label>First Name</label>
                                <input
                                type="text"
                                className="form__control"
                                placeholder="Enter First Name"
                                />
                            </div>
                            <div className="userpage__rows">
                                <label>Last Name</label>
                                <input
                                type="text"
                                className="form__control"
                                placeholder="Enter Last Name"
                                />
                            </div>
                            <div className="userpage__rows">
                                <label>Email Address</label>
                                <input
                                type="text"
                                className="form__control"
                                placeholder="example@domain.com"
                                />
                            </div>
                            <div className="userpage__rows">
                                <label>Password</label>
                                <input
                                type="text"
                                className="form__control"
                                placeholder="Enter Password"
                                />
                            </div>
                            <div className="userpage__rows">
                                <label>Git username</label>
                                <input
                                type="text"
                                className="form__control"
                                placeholder="Enter Git username"
                                />
                            </div>
                            <div className="userpage__rows">
                                <label>Phone Number</label>
                                <input
                                type="text"
                                className="form__control"
                                placeholder="(xxx)-xxx-xxxx"
                                />
                            </div>
                            <div className="userpage__rows">
                                <label>Birthday</label>
                                <input
                                type="text"
                                className="form__control"
                                placeholder="mm/dd/yyyy"
                                />
                            </div>
                            <div className="userpage__rows">
                                <label> </label>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
}