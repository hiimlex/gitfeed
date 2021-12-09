import { BsGithub } from "react-icons/bs";
import { TitleBoxContent, TitleBoxText } from "./styles";

interface TitleBoxProps {
	title: string;
}

const TitleBox = ({ title }: TitleBoxProps) => (
	<TitleBoxContent>
		<TitleBoxText>
			<BsGithub size={28} /> {title}
		</TitleBoxText>
	</TitleBoxContent>
);
export default TitleBox;
