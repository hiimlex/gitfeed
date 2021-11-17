import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const NotFound = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	text-align: center;
	padding: 12px;
`;

export const NotFoundText = styled.span`
	font-size: 1rem;
	font-weight: 500;
`;
