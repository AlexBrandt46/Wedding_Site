export type StoryEntry = {
	id: number;
	header: string;
	text_body: string;
	images: string[] | undefined;
	[key: string]: unknown;
};
