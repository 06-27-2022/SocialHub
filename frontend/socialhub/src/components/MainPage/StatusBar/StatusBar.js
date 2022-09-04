import React from 'react';
import "./StatusBar.css";
import StatusSender from "./StatusSender";
import Post from "../Post/Post";

function StatusBar() {
  return (
    <div className="statusbar">
        <StatusSender />

        <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oeegjCS9uIRPQlcTpEtMSWgcHuP6Wm-glw&usqp=CAU"
        message="Blasting on down to Flavor Town!"
        timestamp="10:30pm"
        username="Guy Fieri"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkG_5_-0eEZYGBbuRdWCnSqfTuejrxcOJ1QQ&usqp=CAU" />
        <Post 
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oeegjCS9uIRPQlcTpEtMSWgcHuP6Wm-glw&usqp=CAU"
        message="Now that's a lot of FLAVOR!"
        timestamp="10:30pm"
        username="Guy Fieri" />
        <Post />
    </div>
  );
}

export default StatusBar;
