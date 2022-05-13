const responseHandler = res => {	
	return res.ok ? res.json() : res.statusText;
}

class Api {
	constructor({path, token}) {
		this.path = path;
		this.token = token;
	}
	getPostsList() {
		return fetch(`${this.path}/posts`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		}).then(responseHandler);
	}
	getSinglePost(id) {
		return fetch(`${this.path}/posts/${id}`, {
			headers: {
				"authorization": `Bearer ${this.token}`
			}
		}).then(responseHandler);
	}
	setNewPost(body) {
		return fetch(`${this.path}/posts`, {
			method: "POST",
			headers: {
				"authorization": `Bearer ${this.token}`, 
				"Content-Type": "application/json"				 
			},
			body: JSON.stringify(body)
		}).then(responseHandler);
	}
	deletePost = (e) => {
		let id = e.target.id;		
		fetch(`https://api.react-learning.ru/posts/${id}`, {
			 method: "DELETE",
			 headers: {
				  authorization: `Bearer ${this.token}`
			 }
		}).then(responseHandler);
  }
  redactPost(id, body) {	
	return fetch(`${this.path}/posts/${id}`, {
		method: "PATCH",
		headers: {
			"authorization": `Bearer ${this.token}`, 
			"Content-Type": "application/json"				 
		},
		body: JSON.stringify(body)
	}).then(responseHandler);
}
	setPostLike(id, isLike) {
		return fetch(`${this.path}/posts/likes/${id}`, {
			 method: isLike ? "DELETE" : "PUT",
			 headers: {
				  "authorization": `Bearer ${this.token}`
			 }
		}).then(responseHandler);
  }
  signup(body) {
		return fetch(`${this.path}/signup`, {
			 method: "POST",
			 headers: {
				  "Content-Type": "application/json"
			 },
			 body: JSON.stringify(body)
		}).then(responseHandler);
  }
  signin(body) {
		return fetch(`${this.path}/signin`, {
			 method: "POST",
			 headers: {
				  "Content-Type": "application/json"
			 },
			 body: JSON.stringify(body)
		}).then(responseHandler);
  }
  getProfile() {
	return fetch(`${this.path}/users/me`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${this.token}`
		}
	}).then(responseHandler);
}
redactProfileText(body) {
	return fetch(`${this.path}/users/me`, {
		method: "PATCH",
		headers: {
			"authorization": `Bearer ${this.token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	}).then(responseHandler);
}
redactProfileAvatar(body) {
	return fetch(`${this.path}/users/me/avatar`, {
		method: "PATCH",
		headers: {
			"authorization": `Bearer ${this.token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	}).then(responseHandler);
}
}

const config = {
	path: "https://api.react-learning.ru",	
	token: localStorage.getItem("token")	
}

const api = new Api(config);

export default api;