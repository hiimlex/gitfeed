export interface GetPostData {
	createdAt: Date;
	username: string;
	content: string;
	avatar: string;
	favorites: number;
	id: string;
	userId: string;
}

export type NewPostData = Omit<GetPostData, "id">;
