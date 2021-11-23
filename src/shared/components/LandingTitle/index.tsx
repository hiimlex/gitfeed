import { BsGithub } from "react-icons/bs";
import { LandingTitleBox, LandingTitleText } from "./styles";

interface LandingTitleProps {
	title: string;
}

const LandingTitle = ({ title }: LandingTitleProps) => (
	<LandingTitleBox>
		<LandingTitleText>
			<BsGithub size={28} /> {title}
		</LandingTitleText>
	</LandingTitleBox>
);
export default LandingTitle;
