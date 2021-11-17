import { useEffect, useState } from "react";
import { GetPostData } from "../../api/models/gitModel";
import { getAllPosts } from "../../api/services/api";
import { randomId } from "../../utils/random-id";
import Post from "../Post";
import { Container, NotFound, NotFoundText } from "./styles";

export interface PostData {
	username: string;
	avatar: string;
	content: string;
	favs: number;
}

const PostList = () => {
	const [posts, setPosts] = useState<GetPostData[]>([]);

	const getPostData = async () => {
		const { data } = await getAllPosts();
		setPosts(data);
	};

	useEffect(() => {
		getPostData();
	}, []);

	return (
		<Container>
			{posts.length ? (
				posts.map((el) => (
					<Post
						key={randomId()}
						postData={{
							username: el.username,
							avatar: el.avatar,
							content: el.content,
							favs: el.favorites,
						}}
					/>
				))
			) : (
				<NotFound>
					<NotFoundText>There's no posts yet :C</NotFoundText>
				</NotFound>
			)}
		</Container>
	);
};

export default PostList;
