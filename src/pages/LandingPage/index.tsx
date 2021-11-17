import React, { useContext, useEffect } from "react";
import Profile from "../../components/Profile";
import UserContext from "../../context/user-context";
import {
	Button,
	Column,
	Container,
	Content,
	Divider,
	Feed,
	NewPost,
	NewPostAvatar,
	TextArea,
	Title,
	TitleBox,
} from "./styles";

const LandingPage = () => {
	const { state } = useContext(UserContext);
	const { gitData } = state;

	useEffect(() => {
		console.log(gitData);
	});

	return (
		<Container>
			<Content>
				<Profile gitData={gitData} />
				<Feed>
					<TitleBox>
						<Title>Feed</Title>
					</TitleBox>

				</Feed>
			</Content>
		</Container>
	);
};

export default LandingPage;
