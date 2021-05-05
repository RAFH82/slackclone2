import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function ChatInput({ channelName, channelId }) {
	const sendMessage = (e) => {
		e.preventDefault();
	};

	return (
		<ChatInputContainer>
			<form>
				<input placeHolder={`Message #Room`} />
				<Button hidden type="submit" onClick={sendMessage}>
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