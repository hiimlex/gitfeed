import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
	width: 100vw;

	background: #404044;
	color: #fff;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	width: 60vw;
	max-width: 428px;

	padding: 12px 24px;
	border-radius: 12px;
	background: #434346;
	box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.05);
`;

export const BoxTitle = styled.h1`
	font-size: 1.8rem;
	line-height: 3rem;
`;

export const BoxSubtitle = styled.h3`
	font-size: 0.9rem;
	line-height: 1.8rem;
	font-weight: 500;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;
	margin: 18px 0;

	* {
		margin: 2px 0;
		width: 100%;
		font-size: 0.8rem;
	}
`;

export const Input = styled.input`
	outline: 0;
	border: 1px solid #fff;
	background: transparent;
	padding: 6px 10px;
	border-radius: 4px;
	color: #fff;
`;

export const Button = styled.button`
	width: 100%;
	padding: 8px 12px;
	border-radius: 4px;
	background: #ff5722;
	color: #fff;
	font-size: 0.9rem;
	text-transform: uppercase;
	font-weight: 700;
	outline: 0;
	border: 0;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		opacity: 0.84;
	}
`;

export const InputError = styled.span`
	color: #ff5722;
	font-size: 0.8rem;
	font-weight: 500;

	transition: all 0.3s ease-in-out;
`;
