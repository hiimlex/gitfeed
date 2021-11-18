import { useContext, useState } from "react";
import {
	HiDotsVertical,
	HiHeart,
	HiOutlineHeart,
	HiTrash,
} from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { GetPostData } from "../../api/models/postModel";
import { deletePost, updatePost } from "../../api/services/post";
import UserContext from "../../context/user-context";
import { Column } from "../NewPost/styles";
import {
	Actions,
	Content,
	Dropdown,
	DropdownContent,
	ExcludeItem,
	Item,
	PostAvatar,
	PostDescription,
	PostUsername,
	Row,
} from "./styles";

interface PostProps {
	postData: GetPostData;
	reloadData: () => void;
}

const Post = (props: PostProps) => {
	const [visible, setVisible] = useState(false);
	const [favorited, setFavorited] = useState(false);
	const { postData, reloadData } = props;

	const { state } = useContext(UserContext);

	const hasPermissionToDelete = state.gitData.id === postData.userId;

	const handleDeletePost = async () => {
		try {
			await deletePost(postData.id);
		} catch (err) {
			console.log(err);
		}

		setVisible(false);

		reloadData();
	};

	const handleFavoritePost = async () => {
		try {
			await updatePost(postData.id, {
				...postData,
				favorites: postData.favorites + 1,
			});
		} catch (err) {
			console.log(err);
		}

		setFavorited(false);

		reloadData();
	};

	const handleClick = () => {
		setFavorited(true);

		handleFavoritePost();
	};

	return (
		<Content>
			<Row>
				<PostAvatar src={postData.avatar} />
				<Column>
					<PostUsername>{postData.username}</PostUsername>
					<PostDescription>{postData.content}</PostDescription>
				</Column>
				<Actions>
					{hasPermissionToDelete && (
						<>
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
									<IoMdClose
										size={16}
										onClick={() => {
											setVisible(!visible);
										}}
									/>
								)}
							</Item>
							{visible && (
								<Dropdown>
									<DropdownContent>
										<ExcludeItem onClick={handleDeletePost}>
											<HiTrash size={16} /> Delete
										</ExcludeItem>
									</DropdownContent>
								</Dropdown>
							)}
						</>
					)}
				</Actions>
			</Row>
			<Actions style={{ padding: "8px" }}>
				<Item>
					{!favorited && (
						<HiOutlineHeart
							size={16}
							style={{ marginRight: 8 }}
							onClick={handleClick}
						/>
					)}
					{favorited && (
						<HiHeart
							size={16}
							style={{ marginRight: 8 }}
							onClick={handleClick}
						/>
					)}
					{postData.favorites}
				</Item>
			</Actions>
		</Content>
	);
};

export default Post;
