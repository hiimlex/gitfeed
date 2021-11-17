import styled from "styled-components";

export const ProfileInfo = styled.div`
	flex: 1;
	max-width: 320px;
	padding: 0 32px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: center;

	border: 1px solid #585757;

	position: sticky;
	height: 100vh;
`;

export const Avatar = styled.img`
	width: 128px;
	height: 128px;
	border-radius: 50%;
	border: 2px solid #fff;
	margin: 8px 0;
`;

export const Username = styled.span`
	font-size: 1.2rem;
	font-weight: 700;
	margin: 4px 0;
`;

export const Bio = styled.span`
	font-size: 0.8rem;
	font-weight: 400;
	margin: 4px 0;
	text-align: justify;
`;

export const Name = styled.span`
	font-size: 1.1rem;
	font-weight: 500;
	margin: 4px 0;
	text-align: justify;
`;

export const AddictionalInfo = styled.div`
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

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin: 4px 0;
	justify-content: space-between;
`;
