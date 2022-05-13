import { createContext } from "react";

export const SearchContext = createContext({
	posts: [],
	text: "",	
	setPosts: () => {},
	setText: () => {},
	search: () => {}
});

