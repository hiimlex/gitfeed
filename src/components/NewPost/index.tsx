import React, { useRef, useState } from "react";
import { newPost } from "../../api/services/api";
import { Divider } from "../../pages/LandingPage/styles";
import { Button, Column, NewPostAvatar, Post, TextArea } from "./styles";

interface NewPostProps {
	gitData: any;
	reloadData: () => void;
}

const NewPost = (props: NewPostProps) => {
	const { gitData, reloadData } = props;

	const [hasContent, setHasContent] = useState(true);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (textareaRef.current) {
			const { value } = textareaRef.current;

			if (value.length > 0) {
				const { data } = await newPost({
					avatar: gitData.avatar_url,
					content: value,
					createdAt: new Date(),
					favorites: 0,
					userId: gitData.id,
					username: gitData.login,
				});

				console.log(data);

				reloadData();

				textareaRef.current.value = "What's up?";
			}
		}
	};

	const handleOnChange = (e: any) => {
		const { value } = e.target;

		setHasContent(value.length > 0);
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
					onChange={handleOnChange}
					defaultValue="What's up?"
				></TextArea>
				<Divider></Divider>
				<Button onClick={handleSubmit} disabled={!hasContent}>
					Send
				</Button>
			</Column>
		</Post>
	);
};

export default NewPost;
