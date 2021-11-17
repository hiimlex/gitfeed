import axios, { AxiosResponse } from "axios";
import { GitUserData, PostGitUser } from "../models/gitModel";

async function getGitUser(value: string): Promise<AxiosResponse<GitUserData>> {
	try {
		const response = await axios.get(`https://api.github.com/users/${value}`);

		return response;
	} catch (err) {
		throw new Error("User not found");
	}
}

async function postGitUser(user: PostGitUser): Promise<AxiosResponse<any>> {
	try {
		const response = await axios.post(
			"https://619545d174c1bd00176c6cb3.mockapi.io/api/v1/user",
			user
		);

		return response;
	} catch (err) {
		throw new Error("Oh Oh Something is wrong");
	}
}

async function getAllUsers(): Promise<AxiosResponse<PostGitUser[]>> {
	try {
		const response = await axios.get(
			"https://619545d174c1bd00176c6cb3.mockapi.io/api/v1/user/"
		);

		return response;
	} catch (err) {
		throw new Error("User not found");
	}
}

export { getGitUser, postGitUser, getAllUsers };
