import React, { Component } from "react";
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
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
                            <img className="navbar__logo"
                                src="http://www.blogcdn.com/www.joystiq.com/media/2010/11/bf10-logo-sears.jpg"
                                alt=""
                            />
                            <div className="navbar__search">
                                <SearchIcon />
                                <input type="text" placeholder="Search SocialHub" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs ={6}>
                        <div className="navbar__middle">
                            <div className="navbar__tabs navbar__tabs--active">
                                <HomeIcon fontSize="large" />
                            </div>
                            <div className="navbar__tabs">
                                <FlagIcon fontSize="large" />
                            </div>
                            <div className="navbar__tabs">
                                <SubscriptionsOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="navbar__tabs">
                                <StorefrontOutlinedIcon fontSize="large" />
                            </div>
                            <div className="navbar__tabs">
                                <SupervisedUserCircleIcon fontSize="large" />
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
                                <AddIcon />
                            </IconButton>
                            <IconButton>
                                <ForumIcon />
                            </IconButton>
                            <IconButton>
                                <NotificationsActiveIcon />
                            </IconButton>
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