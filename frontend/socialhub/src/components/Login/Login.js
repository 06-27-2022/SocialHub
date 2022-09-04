import React, { Component } from 'react';
import "./Login.css";
import socialhubbanner from '../../images/socialhub.png'
import { Grid } from '@material-ui/core';
import { Paper, Avatar } from '@material-ui/core';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            logIN : true,

            //signIN
            login_email:null,
            login_password:null,

            //signup
            signup_firstName: null,
            signup_lastName: null,
            signup_email: null,
            signup_password:null


         }
    }
    switchPanel=()=>{
        if(this.state.logIN)
            this.setState({logIN : false });
        else
            this.setState({logIN : true });
    }

    getImage=()=>{
        return "dp"+Math.floor(Math.random() * 10);
    }

    signUP=()=>{

        // db authorization, .createUserWithEmailAndPassword(this.state.signup_email, this.state.signup_password)
        .then((userCredential) => {
            var user = userCredential.user;

            let payload = {
                "userID" : user.uid,
                "userName": this.state.signup_name,
                "userImage" : this.getImage()
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            };

            fetch("http://localhost:8080/api/userService/save",requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("user",JSON.stringify(data));
                window.location.reload();
            })
            .catch(error =>{

            })
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }

    signInMethod=()=>{
        // db connect, .auth().signInWithEmailAndPassword(this.state.login_email, this.state.login_password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            fetch("http://localhost:8080/api/getAllUsers/"+user.uid)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("user",JSON.stringify(data));
                window.location.reload();
            })
            .catch(error =>{

            })
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
    
    render() { 
        return ( 
        <div className="main__container">
            <Grid className="main__content" container >
                    <Grid item xs={7}>
                        <div className="shlogo">
                            <img src={socialhubbanner} width="300px" />
                        </div>
                        <div>
                            <h1 className="text">SocialHub helps you connect and share with the people in your life.</h1>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="logincard__container">
                        {
                            this.state.logIN == true ?
                        
                            <div container="login__panel" >
                                <div>
                                    <input onChange={(event)=>{this.state.login_email=event.currentTarget.value}}  type="text" className="login__input" placeholder="Email address" />
                                </div>
                                <div>
                                    <input onChange={(event)=>{this.state.login_password=event.currentTarget.value}}  type="password" className="login__input" placeholder="Password"/>
                                </div>
                                <div>
                                    <button onClick={this.logInMethod} className="login__button">Log in</button>
                                </div>
                                <div>
                                    <div className="forget_Text">Forgotten password?</div>
                                </div>
                                <div>
                                    <div className="dividor"></div>
                                </div>
                                <div>
                                    <button className="login__createnew" onClick={this.switchPanel}>Create New Account</button>
                                </div>
                            </div>
                            :
                            <div container="login__panel">
                                <div>
                                    <input onChange={(event)=>{this.state.signup_firstName=event.currentTarget.value}} type="text" className="login__input" placeholder="First Name" />
                                </div>
                                <div>
                                    <input onChange={(event)=>{this.state.signup_lastName=event.currentTarget.value}} type="text" className="login__input" placeholder="Last Name" />
                                </div>
                                <div>
                                    <input onChange={(event)=>{this.state.signup_email=event.currentTarget.value}}  type="text" className="login__input" placeholder="Email address" />
                                </div>
                                <div>
                                    <input onChange={(event)=>{this.state.signup_password=event.currentTarget.value}}  type="password" className="login__input" placeholder="Password"/>
                                </div>
                                <div>
                                    <button onClick={this.signUP} className="login__button">Sign Up</button>
                                </div>
                                <div>
                                    <div onClick={this.switchPanel} className="forget_Text">Already have account?</div>
                                </div>
                            </div>
                         }

                        </Paper>
                    </Grid>
                    <Grid item xs={1}></Grid>
            </Grid>
        </div> );
    }
}
 
export default Login;