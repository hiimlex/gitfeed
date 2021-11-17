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
	Logout,
} from "./styles";

import { FiPower } from "react-icons/fi";
import { useHistory } from "react-router-dom";

interface ProfileProps {
	gitData: any;
}

const Profile = (props: ProfileProps) => {
	const { gitData } = props;
	const history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem("github");
		history.push("/login");
	};

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
						{gitData.company || "No Company"}
					</span>
					<span>
						<HiOutlineUserCircle style={{ marginRight: 4 }} size={15} />
						{gitData.followers || "0"}
					</span>
				</Row>
				<Row>
					<span>
						<HiOutlineMail style={{ marginRight: 4 }} size={15} />
						{gitData.email || "No Email"}
					</span>
					<span>
						<RiGitRepositoryLine style={{ marginRight: 4 }} size={15} />
						{gitData.public_repos || "No Repos"}
					</span>
				</Row>
				<Row>
					<span>
						<HiOutlineLocationMarker style={{ marginRight: 4 }} size={15} />
						{gitData.location || "No Location"}
					</span>
					<span>
						<BsTwitter style={{ marginRight: 4 }} size={15} />
						{gitData.twitter_username || "No Twitter"}
					</span>
				</Row>
			</AddictionalInfo>
			<Divider />
			<Logout onClick={handleLogout}>
				<FiPower size={22} />
			</Logout>
		</ProfileInfo>
	);
};

export default Profile;
