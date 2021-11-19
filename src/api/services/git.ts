import axios, { AxiosResponse } from "axios";
import { GitUserData } from "../models/gitModel";

async function getGitUser(value: string): Promise<AxiosResponse<GitUserData>> {
	try {
		const response = await axios.get(`https://api.github.com/users/${value}`);

		return response;
	} catch (err) {
		throw new Error("User not found");
	}
}

export { getGitUser };
