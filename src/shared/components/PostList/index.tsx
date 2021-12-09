import { GetPostData } from "api/models/postModel";
import Post from "shared/components/Post";
import { randomId } from "shared/utils/random-id";
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
