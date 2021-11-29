import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { GitUserData } from "../../../api/models/gitModel";
import { getGitUser } from "../../../api/services/git";
import { ProfileContainer, ProfileContent, ProfileFeed } from "./styles";

const ProfilePage = () => {
	let { username } = useParams<{ username: string }>();
	const [user, setUser] = useState<GitUserData>({} as GitUserData);

	const history = useHistory();

	const handleGitData = useCallback(async () => {
		try {
			const { data } = await getGitUser(username);

			if (data) {
				setUser(data);
			}
		} catch (err) {
			console.log(err);

			setTimeout(() => {
				history.push("/");
			}, 200);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		handleGitData();
	}, [handleGitData]);

	return (
		<ProfileContainer>
			<ProfileContent>
				<ProfileFeed></ProfileFeed>
			</ProfileContent>
		</ProfileContainer>
	);
};

export default ProfilePage;
