import { BsTwitter } from "react-icons/bs";
import { FiPower } from "react-icons/fi";
import {
	HiOutlineLocationMarker,
	HiOutlineMail,
	HiOutlineOfficeBuilding,
	HiOutlineUserCircle,
} from "react-icons/hi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { GitUserData } from "../../../api/models/gitModel";
import { Divider } from "../../../core-ui/pages/LandingPage/styles";
import {
	ProfileAddictionalInfo,
	ProfileAvatar,
	ProfileBio,
	ProfileInfo,
	ProfileLogout,
	ProfileName,
	ProfileRow,
	ProfileUsername,
} from "./styles";

interface ProfileProps {
	gitData: GitUserData;
}

const Profile = ({ gitData }: ProfileProps) => {
	const history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem("github");
		history.push("/login");
	};

	return (
		<ProfileInfo>
			<ProfileAvatar src={gitData.avatar_url} alt={gitData.login} />
			<ProfileUsername>@{gitData.login}</ProfileUsername>
			<ProfileName>{gitData.name}</ProfileName>
			<ProfileBio>{gitData.bio}</ProfileBio>
			<Divider />
			<ProfileAddictionalInfo>
				<ProfileRow>
					<span>
						<HiOutlineOfficeBuilding style={{ marginRight: 4 }} size={15} />
						{gitData.company || "No Company"}
					</span>
					<span>
						<HiOutlineUserCircle style={{ marginRight: 4 }} size={15} />
						{gitData.followers || "0"}
					</span>
				</ProfileRow>
				<ProfileRow>
					<span>
						<HiOutlineMail style={{ marginRight: 4 }} size={15} />
						{gitData.email || "No Email"}
					</span>
					<span>
						<RiGitRepositoryLine style={{ marginRight: 4 }} size={15} />
						{gitData.public_repos || "No Repos"}
					</span>
				</ProfileRow>
				<ProfileRow>
					<span>
						<HiOutlineLocationMarker style={{ marginRight: 4 }} size={15} />
						{gitData.location || "No Location"}
					</span>
					<span>
						<BsTwitter style={{ marginRight: 4 }} size={15} />
						{gitData.twitter_username || "No Twitter"}
					</span>
				</ProfileRow>
			</ProfileAddictionalInfo>
			<Divider />
			<ProfileLogout onClick={handleLogout}>
				<FiPower size={22} />
			</ProfileLogout>
		</ProfileInfo>
	);
};

export default Profile;
