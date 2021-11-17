import { BsTwitter } from "react-icons/bs";
import {
	HiOutlineOfficeBuilding,
	HiOutlineUserCircle,
	HiOutlineMail,
	HiOutlineLocationMarker,
} from "react-icons/hi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { Divider } from "../../pages/LandingPage/styles";
import {
	ProfileInfo,
	Avatar,
	Username,
	Name,
	Bio,
	AddictionalInfo,
	Row,
} from "./styles";

interface ProfileProps {
	gitData: any;
}

const Profile = (props: ProfileProps) => {
	const { gitData } = props;

	return (
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
	);
};

export default Profile;
