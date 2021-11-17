import React, { useRef } from "react";
import { Divider } from "../../pages/LandingPage/styles";
import { Button, Column, NewPostAvatar, Post, TextArea } from "./styles";

interface NewPostProps {
	gitData: any;
}

const NewPost = (props: NewPostProps) => {
	const { gitData } = props;
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (textareaRef.current) {
			console.log(textareaRef.current.value);
		}
	};

	return (
		<Post>
			<NewPostAvatar src={gitData.avatar_url} alt={gitData.login} />
			<Column>
				<TextArea
					ref={textareaRef}
					contentEditable
					suppressContentEditableWarning={true}
					role="textbox"
					defaultValue="What's up?"
				></TextArea>
				<Divider></Divider>
				<Button onClick={handleSubmit}>Send</Button>
			</Column>
		</Post>
	);
};

export default NewPost;
