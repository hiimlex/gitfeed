import { GetPostData } from "../../../api/models/postModel";
import { randomId } from "../../utils/random-id";
import Post from "../Post";
import {
	PostListContainer,
	PostListNotFound,
	PostListNotFoundText,
} from "./styles";

interface PostListProps {
	posts: GetPostData[];
	reloadData: () => void;
}

const PostList = ({ posts, reloadData }: PostListProps) => (
	<PostListContainer>
		{posts.length ? (
			posts.map((el) => (
				<Post key={randomId()} reloadData={reloadData} postData={el} />
			))
		) : (
			<PostListNotFound>
				<PostListNotFoundText>There's no posts yet :C</PostListNotFoundText>
			</PostListNotFound>
		)}
	</PostListContainer>
);

export default PostList;
