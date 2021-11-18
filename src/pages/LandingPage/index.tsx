import React, { useContext, useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { GetPostData } from "../../api/models/gitModel";
import { getAllPosts } from "../../api/services/api";
import NewPost from "../../components/NewPost";
import PostList from "../../components/PostList";
import Profile from "../../components/Profile";
import UserContext from "../../context/user-context";
import { Container, Content, Feed, Title, TitleBox } from "./styles";

const LandingPage = () => {
	const { state } = useContext(UserContext);
	const { gitData } = state;

	const [posts, setPosts] = useState<GetPostData[]>([]);

	const getPostData = async () => {
		try {
			const { data } = await getAllPosts();
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	const reloadPosts = () => {
		getPostData();
	};

	useEffect(() => {
		getPostData();
	}, []);

	return (
		<Container>
			<Content>
				<Profile gitData={gitData} />
				<Feed>
					<TitleBox>
						<Title>
							<BsGithub size={28} /> Feed
						</Title>
					</TitleBox>
					<NewPost gitData={gitData} reloadData={reloadPosts} />
					<PostList posts={posts} reloadData={reloadPosts} />
				</Feed>
			</Content>
		</Container>
	);
};

export default LandingPage;
