import React from 'react';
import "./StatusBar.css";
import StatusSender from "./StatusSender";
import Post from "../Post/Post";
import { useState, useEffect } from 'react';

function StatusBar() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/photo/meme";
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPhotos(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="statusbar">
      {photos.map(photo => (
        <Post
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oeegjCS9uIRPQlcTpEtMSWgcHuP6Wm-glw&usqp=CAU"
          message={photo.description}
          timestamp="10:30pm"
          username={photo.uploadedBy.firstName}
          key={photo.id}
          image={photo.urllink} />
      ))}

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
