import { createContext } from "react";

export const UserContext = createContext({
	token: "",
	user: "",
	setToken: () => {},
	setUser: () => {}
});

export const UserValue = {
	token: localStorage.getItem("token") || "",			
	user: localStorage.getItem("user") || "",
	setToken: (data) => {		
		localStorage.setItem("token", data)
	},
	setUser: (id) => {		
		localStorage.setItem("user", id);
	}
}