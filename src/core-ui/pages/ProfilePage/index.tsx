import { GitUserData } from "api/models/gitModel";
import { GetPostData } from "api/models/postModel";
import { getGitUser } from "api/services/git";
import { getAllPosts } from "api/services/post";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import PostList from "shared/components/PostList";
import Profile from "shared/components/Profile";
import SearchSection from "shared/components/SearchSection";
import TitleBox from "shared/components/TitleBox";
import { ProfileContainer, ProfileContent, ProfileFeed } from "./styles";

const ProfilePage = () => {
	let { username } = useParams<{ username: string }>();

	const [user, setUser] = useState<GitUserData>({} as GitUserData);
	const [posts, setPosts] = useState<GetPostData[]>([]);

	const history = useHistory();

	const handleGitData = useCallback(async () => {
		try {
			const { data } = await getGitUser(username);

			if (data) {
				setUser(data);
			}
		} catch (err) {
			console.log(err);

			setTimeout(() => {
				history.push("/");
			}, 200);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [username]);

	const getUserPostData = useCallback(async () => {
		try {
			let { data } = await getAllPosts();

			data.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

			data = data.filter((post) => post.username === username);

			setPosts(data);
		} catch (error) {
			console.log(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [username]);

	const reloadPosts = () => {
		getUserPostData();
	};

	useEffect(() => {
		getUserPostData();
	}, [getUserPostData]);

	useEffect(() => {
		handleGitData();
	}, [handleGitData]);

	return (
		<ProfileContainer>
			<ProfileContent>
				<Profile gitData={user} />
				<ProfileFeed>
					<TitleBox title="Profile" />
					<PostList posts={posts} reloadData={reloadPosts} />
				</ProfileFeed>
				<SearchSection />
			</ProfileContent>
		</ProfileContainer>
	);
};

export default ProfilePage;
