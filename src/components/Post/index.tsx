import { debounce } from "lodash";
import React, { useCallback, useContext, useState } from "react";
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
import {
	PostActions,
	PostAvatar,
	PostColumn,
	PostContent,
	PostDescription,
	PostDropdown,
	PostDropdownContent,
	PostExcludeItem,
	PostItem,
	PostRow,
	PostUsername,
} from "./styles";

interface PostProps {
	postData: GetPostData;
	reloadData: () => void;
}

const Post = ({ postData, reloadData }: PostProps) => {
	const [visible, setVisible] = useState(false);
	const [favorited, setFavorited] = useState(false);

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

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceFavClick = useCallback(debounce(handleFavoritePost, 300), []);

	const handleClick = (e: any) => {
		e.preventDefault();

		setFavorited(true);

		debounceFavClick();
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps

	return (
		<PostContent>
			<PostRow>
				<PostAvatar src={postData.avatar} />
				<PostColumn>
					<PostUsername>{postData.username}</PostUsername>
					<PostDescription>{postData.content}</PostDescription>
				</PostColumn>
				<PostActions>
					{hasPermissionToDelete && (
						<>
							<PostItem>
								{visible ? (
									<IoMdClose
										size={16}
										onClick={() => {
											setVisible(!visible);
										}}
									/>
								) : (
									<HiDotsVertical
										size={16}
										onClick={() => {
											setVisible(!visible);
										}}
									/>
								)}
							</PostItem>
							{visible && (
								<PostDropdown>
									<PostDropdownContent>
										<PostExcludeItem onClick={handleDeletePost}>
											<HiTrash size={16} /> Delete
										</PostExcludeItem>
									</PostDropdownContent>
								</PostDropdown>
							)}
						</>
					)}
				</PostActions>
			</PostRow>
			<PostActions style={{ padding: "8px" }}>
				<PostItem>
					{favorited ? (
						<HiHeart
							size={16}
							style={{ marginRight: 8 }}
							onClick={handleClick}
						/>
					) : (
						<HiOutlineHeart
							size={16}
							style={{ marginRight: 8 }}
							onClick={handleClick}
						/>
					)}
					{postData.favorites}
				</PostItem>
			</PostActions>
		</PostContent>
	);
};

export default Post;
