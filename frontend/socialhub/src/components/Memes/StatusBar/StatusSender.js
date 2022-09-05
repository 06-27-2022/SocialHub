import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./StatusSender.css";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import "./StatusBar.css";
import UploadIcon from '@mui/icons-material/Upload';

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
                            placeholder={'Photo description'}
                        />
                        <div className="statusSender__option">
                            <PhotoLibraryIcon style={{ color: "green" }} />
                            <h3>Photo</h3>
                        </div>
                        <div className="statusSender__option">
                            <UploadIcon style={{ color: "red" }} />
                            <h3>Upload</h3>
                        </div>
                        <button onClick={handleSubmit} type="submit">
                            Hidden submit
                        </button>
                    </form>
                </div>
            </div>
        
    );
}

export default StatusSender;
