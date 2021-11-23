import styled from "styled-components";

export const LandingContainer = styled.div`
	height: 100vh;
	width: 100vw;

	background: #404044;
	color: #fff;

	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const LandingContent = styled.div`
	max-width: 1080px;
	height: 100vh;
	max-height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
`;

export const LandingFeed = styled.div`
	width: 38vw;
	height: 100vh;
	min-width: 620px;
	max-width: 838px;
	overflow: auto;

	border: 1px solid #585757;
	border-left: none;
	position: relative;
`;

export const Divider = styled.hr`
	width: 100%;
	border: 0;
	height: 1px;
	background: #ffffff12;
	margin: 8px 0;
`;

