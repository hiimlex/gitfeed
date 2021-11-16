import axios from "axios";

async function getGitUser(value: string) {
	try {
		const response = await axios.get(`https://api.github.com/users/${value}`);

		return response;
	} catch (err) {
		throw new Error("User not found");
	}
}

export { getGitUser };
