import React, { useContext, useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import {
	HiOutlineLocationMarker,
	HiOutlineMail,
	HiOutlineOfficeBuilding,
	HiOutlineUserCircle,
} from "react-icons/hi";
import { RiGitRepositoryLine } from "react-icons/ri";
import UserContext from "../../user-context";
import {
	AddictionalInfo,
	Avatar,
	Bio,
	Button,
	Column,
	Container,
	Content,
	Divider,
	Feed,
	Name,
	NewPost,
	NewPostAvatar,
	ProfileInfo,
	Row,
	TextArea,
	Title,
	TitleBox,
	Username,
} from "./styles";

const LandingPage = () => {
	const { state } = useContext(UserContext);
	const { gitData } = state;

	useEffect(() => {
		console.log(gitData);
	});

	return (
		<Container>
			<Content>
				<ProfileInfo>
					<Avatar src={gitData.avatar_url} alt={gitData.login} />
					<Username>@{gitData.login}</Username>
					<Name>{gitData.name}</Name>
					<Bio>{gitData.bio}</Bio>
					<Divider />
					<AddictionalInfo>
						<Row>
							<span>
								<HiOutlineOfficeBuilding style={{ marginRight: 4 }} size={15} />
								{gitData.company}
							</span>
							<span>
								<HiOutlineUserCircle style={{ marginRight: 4 }} size={15} />
								{gitData.followers}
							</span>
						</Row>
						<Row>
							<span>
								<HiOutlineMail style={{ marginRight: 4 }} size={15} />
								{gitData.email || "No Email"}
							</span>
							<span>
								<RiGitRepositoryLine style={{ marginRight: 4 }} size={15} />
								{gitData.public_repos}
							</span>
						</Row>
						<Row>
							<span>
								<HiOutlineLocationMarker style={{ marginRight: 4 }} size={15} />
								{gitData.location}
							</span>
							<span>
								<BsTwitter style={{ marginRight: 4 }} size={15} />
								{gitData.twitter_username}
							</span>
						</Row>
					</AddictionalInfo>
				</ProfileInfo>
				<Feed>
					<TitleBox>
						<Title>Feed</Title>
					</TitleBox>
					<NewPost>
						<NewPostAvatar src={gitData.avatar_url} alt={gitData.login} />
						<Column>
							<TextArea contentEditable suppressContentEditableWarning={true}>
								What's on your mind?
							</TextArea>
							<Divider></Divider>
							<Button>Send</Button>
						</Column>
					</NewPost>
				</Feed>
			</Content>
		</Container>
	);
};

export default LandingPage;
