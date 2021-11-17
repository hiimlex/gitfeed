import React, { useContext, useEffect } from "react";
import NewPost from "../../components/NewPost";
import Profile from "../../components/Profile";
import UserContext from "../../context/user-context";
import { Container, Content, Feed, Title, TitleBox } from "./styles";

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
					<NewPost gitData={gitData} />
				</Feed>
			</Content>
		</Container>
	);
};

export default LandingPage;
