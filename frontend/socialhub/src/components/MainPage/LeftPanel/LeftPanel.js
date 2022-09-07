import React from 'react';
import "./LeftPanel.css";
import LeftPanelRow from "./LeftPanelRow.js";
import {Link} from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';

function LeftPanel() {
    return (
        <div className="leftpanel">
            <Link to="/userpage"><LeftPanelRow src="https://flyclipart.com/thumb2/jane-doe-cliparts-708896.png"
                title="Jane Doe" /></Link>
            <LeftPanelRow Icon={PeopleIcon} title="Friends" />
            <div className="leftpanelRow-unactive">
                <GroupsIcon />
                <h4>Popular Groups</h4>
            </div>

            <Link to="/groups/memes"><LeftPanelRow Icon={PeopleIcon} title="Memes" /></Link>
            <LeftPanelRow Icon={PeopleIcon} title="Quotes" />
        </div>
    )
}
export default LeftPanel;