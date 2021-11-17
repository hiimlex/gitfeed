import React from "react";
import { Divider } from "../../pages/LandingPage/styles";
import { Button, Column, NewPostAvatar, Post, TextArea } from "./styles";

interface NewPostProps {
	gitData: any;
}

const NewPost = (props: NewPostProps) => {
	const { gitData } = props;

	return (
		<Post>
			<NewPostAvatar src={gitData.avatar_url} alt={gitData.login} />
			<Column>
				<TextArea contentEditable suppressContentEditableWarning={true}>
					What's on your mind?
				</TextArea>
				<Divider></Divider>
				<Button>Send</Button>
			</Column>
		</Post>
	);
};

export default NewPost;
