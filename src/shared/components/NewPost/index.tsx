import React, { useRef, useState } from "react";
import { GitUserData } from "../../../api/models/gitModel";
import { newPost } from "../../../api/services/post";
import { Divider } from "../../../core-ui/pages/LandingPage/styles";
import {
	NewPostAvatar,
	NewPostButton,
	NewPostColumn,
	NewPostContainer,
	NewPostTextArea,
} from "./styles";

interface NewPostProps {
	gitData: GitUserData;
	reloadData: () => void;
}

const NewPost = ({ gitData, reloadData }: NewPostProps) => {
	const [hasContent, setHasContent] = useState(true);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (textareaRef.current) {
			const { value } = textareaRef.current;

			if (value.length > 0) {
				const { avatar_url, id, login } = gitData;

				await newPost({
					avatar: avatar_url,
					content: value,
					createdAt: new Date(),
					favorites: 0,
					userId: id,
					username: login,
				});

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
		<NewPostContainer>
			<NewPostAvatar src={gitData.avatar_url} alt={gitData.login} />
			<NewPostColumn>
				<NewPostTextArea
					ref={textareaRef}
					contentEditable
					suppressContentEditableWarning={true}
					role="textbox"
					onChange={handleOnChange}
					defaultValue="What's up?"
				></NewPostTextArea>
				<Divider></Divider>
				<NewPostButton onClick={handleSubmit} disabled={!hasContent}>
					Send
				</NewPostButton>
			</NewPostColumn>
		</NewPostContainer>
	);
};

export default NewPost;
