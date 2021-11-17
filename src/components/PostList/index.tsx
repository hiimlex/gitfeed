import { randomId } from "../../utils/random-id";
import Post from "../Post";
import { Container } from "./styles";

interface PostListProps {
	gitData: any;
}

export interface PostData {
	username: string;
	avatar: string;
	content: string;
	favs: number;
}

const PostList = (props: PostListProps) => {
	const { gitData } = props;

	const staticPost: PostData[] = [
		{
			username: "hiimlex",
			avatar: gitData.avatar_url,
			content: gitData.bio + " asdasdasdasdasdasdas asda asd aca asdas da asdsad asdasd asasdas dasdasd asd asdasdas dasdas " ,
			favs: gitData.followers,
		},
	];

	console.log(staticPost);

	return (
		<Container>
			{staticPost.length &&
				staticPost.map((el) => <Post key={randomId()} postData={el} />)}
		</Container>
	);
};

export default PostList;
