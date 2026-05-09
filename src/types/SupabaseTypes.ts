export type StoryEntry = {
  id: number;
  header: string;
  his_text: string;
  hers_text: string;
  images: string[] | undefined;
  [key: string]: unknown;
};

export interface StorageImage {
  name: string;
  path: string;
  src: string;
  alt: string;
}
