import { create } from 'zustand';
import type { StoryEntry } from './types/SupabaseTypes';

type StoryState = {
	storyEntries: Map<number, StoryEntry>;
};

type StoryAction = {
	updateStoryEntries: (storyEntries: StoryEntry[]) => void;
	updateStoryEntry: (storyEntry: StoryEntry) => void;
};

export const useStoryStore = create<StoryState & StoryAction>()((set) => ({
	storyEntries: new Map(),
	updateStoryEntries: (updatedStoryEntries) =>
		set({ storyEntries: new Map(updatedStoryEntries.map((entry) => [entry.id, entry])) }),
	updateStoryEntry: (storyEntry) =>
		set((state) => {
			const updatedEntries = new Map(state.storyEntries);
			updatedEntries.set(storyEntry.id, storyEntry);
			return { storyEntries: updatedEntries };
		}),
}));
