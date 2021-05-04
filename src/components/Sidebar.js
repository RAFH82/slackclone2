import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

// Material UI icons
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Sidebar() {
	return (
		<div>
			<SidebarContainer>
				<SidebarHeader>
					<SidebarInfo>
						<h2>Producer Chat</h2>
						<h3>
							<FiberManualRecordIcon />
							Ryan Hrechka
						</h3>
					</SidebarInfo>
					<CreateIcon />
				</SidebarHeader>
				<SidebarOption Icon={InsertCommentIcon} title="Threads" />
				<SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
				<SidebarOption Icon={DraftsIcon} title="Saved Items" />
				<SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
				<SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
				<SidebarOption Icon={AppsIcon} title="Apps" />
				<SidebarOption Icon={FileCopyIcon} title="File Browser" />
				<SidebarOption Icon={ExpandLessIcon} title="Show Less" />
			</SidebarContainer>
		</div>
	);
}

export default Sidebar;

const SidebarContainer = styled.div`
	color: white;
	background-color: var(--slack-color);
	flex: 0.3;
	border-top: 1px solid #49274b;
	max-width: 260px;
	// set manually to fix sidebar width
	margin-top: 60px;
	height: 100vh;
`;

const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: 13px;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
	}
`;

const SidebarInfo = styled.div`
	flex: 1;

	> h2 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}

	> h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
	}

	> h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		margin-right: 2px;
		color: green;
	}
`;