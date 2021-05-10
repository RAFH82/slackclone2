import React, {useState} from "react";
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {auth, db} from "../firebase";
import firebase from "firebase";

import {useAuthState} from "react-firebase-hooks/auth";

function ChatInput({chatRef, channelName, channelId}) {
	const [user] = useAuthState(auth);
	const [input, setInput] = useState("");

	const sendMessage = (e) => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}

		db.collection("rooms").doc(channelId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: user?.displayName,
			userImage: user?.photoURL,
		});

		chatRef.current.scrollIntoView({behaviour: "smooth"});

		setInput("");
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					placeholder={
						channelId
							? `Message #${channelName}`
							: `Please choose a room to start chatting!`
					}
				/>
				<Button hidden type='submit' onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	> form > input {
		position: fixed;
		outline: none;
		bottom: 30px;
		width: 60%;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
	}

	> form > Button {
		display: none;
	}
`;
