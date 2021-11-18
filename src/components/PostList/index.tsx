import { GetPostData } from "../../api/models/postModel";
import { randomId } from "../../utils/random-id";
import Post from "../Post";
import { Container, NotFound, NotFoundText } from "./styles";

interface PostListProps {
	posts: GetPostData[];
	reloadData: () => void;
}

const PostList = (props: PostListProps) => {
	const { posts, reloadData } = props;

	return (
		<Container>
			{posts.length ? (
				posts.map((el) => (
					<Post key={randomId()} reloadData={reloadData} postData={el} />
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
