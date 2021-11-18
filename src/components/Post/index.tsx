import { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
	HiDotsVertical,
	HiOutlineHeart,
	HiTrash,
	HiHeart,
} from "react-icons/hi";
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
import { deletePost, updatePost } from "../../api/services/api";
import { GetPostData } from "../../api/models/gitModel";
import { debounce } from "lodash";

interface PostProps {
	postData: GetPostData;
	reloadData: () => void;
}

const Post = (props: PostProps) => {
	const [visible, setVisible] = useState(false);
	const [favorited, setFavorited] = useState(false);
	const { postData, reloadData } = props;

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

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceHandleFavoriteClick = useCallback(
		debounce(handleFavoritePost, 500),
		[]
	);

	const handleClick = () => {
		setFavorited(true);

		debounceHandleFavoriteClick();
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
			</Row>
		</Content>
	);
};

export default Post;
