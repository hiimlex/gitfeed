import React, { useContext, useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { GetPostData } from "../../../api/models/postModel";
import { getAllPosts } from "../../../api/services/post";
import NewPost from "../../../shared/components/NewPost";
import PostList from "../../../shared/components/PostList";
import Profile from "../../../shared/components/Profile";
import UserContext from "../../../api/context/user-context";
import {
	LandingContainer,
	LandingContent,
	LandingFeed,
	LandingTitle,
	LandingTitleBox,
} from "./styles";

const LandingPage = () => {
	const [posts, setPosts] = useState<GetPostData[]>([]);

	const { state } = useContext(UserContext);
	const { gitData } = state;

	const getPostData = async () => {
		try {
			const { data } = await getAllPosts();

			data.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

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
		<LandingContainer>
			<LandingContent>
				<Profile gitData={gitData} />
				<LandingFeed>
					<LandingTitleBox>
						<LandingTitle>
							<BsGithub size={28} /> Feed
						</LandingTitle>
					</LandingTitleBox>
					<NewPost gitData={gitData} reloadData={reloadPosts} />
					<PostList posts={posts} reloadData={reloadPosts} />
				</LandingFeed>
			</LandingContent>
		</LandingContainer>
	);
};

export default LandingPage;
