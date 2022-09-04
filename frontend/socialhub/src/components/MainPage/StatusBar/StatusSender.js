import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./StatusSender.css";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PollIcon from '@mui/icons-material/Poll';

function StatusSender() {
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // clever db stuff

        // reset the values
        setInput("");
        setImageUrl("");

    }
  return (
    <div className="statusSender">
        <div className="statusSender__top">
            <Avatar />
            <form>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="statusSender__input" 
                placeholder={'What`s on your mind?'} 
                />
                <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                 placeholder="image URL (Optional)"/>

                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
        </div>

        <div className="statusSender__bottom">
            <div className="statusSender__option">
                <PhotoLibraryIcon style={{ color : "green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="statusSender__option">
                <InsertEmoticonIcon style={{ color : "orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
            <div className="statusSender__option">
                <PollIcon style={{ color : "red"}} />
                <h3>Create a poll</h3> 
            </div>
        </div>
    </div>
    );
}

export default StatusSender;
