import { HiOutlineHeart, HiTrash } from "react-icons/hi";
import { Column } from "../NewPost/styles";
import { PostData } from "../PostList";
import {
	Actions,
	Content,
	Item,
	PostAvatar,
	PostDescription,
	PostUsername,
	Row,
} from "./styles";

interface PostProps {
	postData: PostData;
}

const Post = (props: PostProps) => {
	const { postData } = props;

	return (
		<Content>
			<Row>
				<PostAvatar src={postData.avatar} />
				<Column>
					<PostUsername>{postData.username}</PostUsername>
					<PostDescription>{postData.content}</PostDescription>
					<Actions>
						<Item>
							<HiOutlineHeart size={16} /> {postData.favs}
						</Item>
						<Item>
							<HiTrash size={16} />
						</Item>
					</Actions>
				</Column>
			</Row>
		</Content>
	);
};

export default Post;
