import React, { Component } from "react";
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import { Avatar, IconButton } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }   
    }
    render() { 
        return ( 
            <div>
                <Grid container className="navbar">
                    <Grid item xs ={3}>
                        <div className="navbar__left">
                        <Link to="/"><img className="navbar__logo"
                                src="http://www.blogcdn.com/www.joystiq.com/media/2010/11/bf10-logo-sears.jpg"
                                alt="SocialHub Logo"
                            /></Link>
                            <div className="navbar__search">
                                <SearchIcon />
                                <input type="text" placeholder="Search SocialHub" />
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item xs ={3}>
                        <div className="navbar__right">
                            <div className="navbar__righttab"> 
                                <Avatar />
                                <h4>Jane Doe</h4>
                            </div>
                            <IconButton>
                                <ExpandMoreIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </div> 
        );
    }
}
 
export default NavBar;