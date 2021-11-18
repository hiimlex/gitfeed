import { useState } from "react";
import {
	HiOutlineHeart,
	HiDotsVertical,
	HiDotsHorizontal,
} from "react-icons/hi";
import { Column } from "../NewPost/styles";
import {
	Actions,
	Content,
	Dropdown,
	Item,
	PostAvatar,
	PostDescription,
	PostUsername,
	Row,
} from "./styles";

interface PostProps {
	postData: PostData;
}
interface PostData {
	username: string;
	avatar: string;
	content: string;
	favs: number;
}

const Post = (props: PostProps) => {
	const [visible, setVisible] = useState(false);
	const { postData } = props;

	return (
		<Content>
			<Row>
				<PostAvatar src={postData.avatar} />
				<Column>
					<PostUsername>{postData.username}</PostUsername>
					<PostDescription>{postData.content}</PostDescription>
				</Column>
				<Actions>
					<Item>
						{!visible && (
							<HiDotsVertical
								size={16}
								onClick={() => {
									setVisible(!visible);
								}}
							/>
						)}
						{visible && (
							<HiDotsHorizontal
								size={16}
								onClick={() => {
									setVisible(!visible);
								}}
							/>
						)}
						{visible && <Dropdown>dropdown</Dropdown>}
					</Item>
					<Item>
						<HiOutlineHeart size={16} /> {postData.favs}
					</Item>
				</Actions>
			</Row>
		</Content>
	);
};

export default Post;
