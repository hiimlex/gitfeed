import axios, { AxiosResponse } from "axios";
import { GetPostData, NewPostData } from "../models/postModel";

async function getAllPosts(): Promise<AxiosResponse<GetPostData[]>> {
	try {
		const response = await axios.get(
			`https://619545d174c1bd00176c6cb3.mockapi.io/api/v1/posts`
		);

		return response;
	} catch (err) {
		throw new Error("User not found");
	}
}

async function newPost(post: NewPostData): Promise<AxiosResponse<any>> {
	try {
		const response = await axios.post(
			`https://619545d174c1bd00176c6cb3.mockapi.io/api/v1/posts`,
			post
		);

		return response;
	} catch (err) {
		throw new Error("Oh Oh Something is wrong");
	}
}

async function deletePost(id: string): Promise<AxiosResponse<any>> {
	try {
		const response = await axios.delete(
			`https://619545d174c1bd00176c6cb3.mockapi.io/api/v1/posts/${id}`
		);

		return response;
	} catch (err) {
		throw new Error("Oh Oh Something is wrong");
	}
}

async function updatePost(
	id: string,
	post: NewPostData
): Promise<AxiosResponse<any>> {
	try {
		const response = await axios.put(
			`https://619545d174c1bd00176c6cb3.mockapi.io/api/v1/posts/${id}`,
			post
		);

		return response;
	} catch (err) {
		throw new Error("Oh Oh Something is wrong");
	}
}

export { getAllPosts, newPost, deletePost, updatePost };
