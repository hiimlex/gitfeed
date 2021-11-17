import React, { useContext } from "react";
import NewPost from "../../components/NewPost";
import PostList from "../../components/PostList";
import Profile from "../../components/Profile";
import UserContext from "../../context/user-context";
import { Container, Content, Feed, Title, TitleBox } from "./styles";

const LandingPage = () => {
	const { state } = useContext(UserContext);
	const { gitData } = state;

	return (
		<Container>
			<Content>
				<Profile gitData={gitData} />
				<Feed>
					<TitleBox>
						<Title>Feed</Title>
					</TitleBox>
					<NewPost gitData={gitData} />
					<PostList gitData={gitData}></PostList>
				</Feed>
			</Content>
		</Container>
	);
};

export default LandingPage;
