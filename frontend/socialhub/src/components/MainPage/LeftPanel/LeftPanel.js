import React from 'react';
import "./LeftPanel.css";
import LeftPanelRow from "./LeftPanelRow.js";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { ExpandMoreOutlined } from "@mui/icons-material";

function LeftPanel() {
    return (
        <div className="leftpanel">
            <LeftPanelRow src="https://flyclipart.com/thumb2/jane-doe-cliparts-708896.png" 
            title="Jane Doe" />
            <LeftPanelRow Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"/>
            <LeftPanelRow Icon={PeopleIcon} title="Friends"/>
            <LeftPanelRow Icon={GroupsIcon}title="Your Groups"/>
            <LeftPanelRow Icon={EmojiFlagsIcon} title="Pages"/>
            <LeftPanelRow Icon={VideoLibraryIcon} title="Videos" />
            <LeftPanelRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}
export default LeftPanel;