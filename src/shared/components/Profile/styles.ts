import styled from "styled-components";

export const ProfileInfo = styled.div`
	flex: 1;
	max-width: 280px;
	padding: 0 32px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: center;

	position: sticky;
`;

export const ProfileAvatar = styled.img`
	width: 128px;
	height: 128px;
	border-radius: 50%;
	border: 2px solid #fff;
	margin: 8px 0;
`;

export const ProfileUsername = styled.span`
	font-size: 1.2rem;
	font-weight: 700;
	margin: 4px 0;
`;

export const ProfileBio = styled.span`
	font-size: 0.8rem;
	font-weight: 400;
	margin: 4px 0;
	text-align: justify;
`;

export const ProfileName = styled.span`
	font-size: 1.1rem;
	font-weight: 500;
	margin: 4px 0;
	text-align: justify;
`;

export const ProfileAddictionalInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 4px 0;
	width: 100%;

	* {
		display: flex;
		align-items: center;
		font-size: 0.7rem;
		word-wrap: break-word;
	}
`;

export const ProfileRow = styled.div`
	display: flex;
	flex-direction: row;
	margin: 4px 0;
	justify-content: space-between;
`;

export const ProfileLogout = styled.div`
	width: 42px;
	height: 42px;
	margin: 12px 0;
	padding: 4px;

	border-radius: 8px;
	border: 1px solid #585757;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #ff5722;
		color: #fff;
	}
`;
