import UserContext from "api/context/user-context";
import { GetPostData } from "api/models/postModel";
import { getAllPosts } from "api/services/post";
import React, { useContext, useEffect, useState } from "react";
import NewPost from "shared/components/NewPost";
import PostList from "shared/components/PostList";
import Profile from "shared/components/Profile";
import SearchSection from "shared/components/SearchSection";
import TitleBox from "shared/components/TitleBox";
import { LandingContainer, LandingContent, LandingFeed } from "./styles";

const LandingPage = () => {
	const [posts, setPosts] = useState<GetPostData[]>([]);

	const { state } = useContext(UserContext);
	const { gitData: user } = state;

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
				<Profile gitData={user} />
				<LandingFeed>
					<TitleBox title="Feed" />
					<NewPost gitData={user} reloadData={reloadPosts} />
					<PostList posts={posts} reloadData={reloadPosts} />
				</LandingFeed>
				<SearchSection />
			</LandingContent>
		</LandingContainer>
	);
};

export default LandingPage;
