import { GetPostData } from "../../api/models/gitModel";
import { randomId } from "../../utils/random-id";
import Post from "../Post";
import { Container, NotFound, NotFoundText } from "./styles";

interface PostListProps {
	posts: GetPostData[];
}

const PostList = (props: PostListProps) => {
	const { posts } = props;

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
