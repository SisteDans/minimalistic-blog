import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import api from '../API';

import { SearchContext } from '../context/SearchContext';
import { UserContext } from '../context/UserContext';
import { FavoritesContext } from '../context/FavoritesContext';

const Home = () => {	
	
	const [searchText, changeText] = useState("");
	const [posts, setPosts] = useState([]);
	const [user, setUser] = useState(localStorage.getItem("user"));
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [favorites, updFav] = useState([]);		
	
	useEffect(() => {		 		 
		 api.getPostsList().then(data => {			
			setPosts(data);			
			});	  
	}, []);		

	const userHandler = (id) => {		
		setUser(id);
		console.log(id);
		localStorage.setItem("user", id);		
	}

	const tokenHandler = (data) => {		
		setToken(data);
		console.log(data);
		localStorage.setItem("token", data);		
	}

	const setFavorites = (obj) => {		 
		 if (obj.likes.includes(user)) {
			  if (!favorites.includes(el => el._id === obj._id)) {
					updFav([...favorites, obj]);
			  }
		 } else {
			  updFav(favorites.filter(el => el._id !== obj._id));
		 }
	}

	const searchHandler = () => {		 
		 return posts.filter(el => el.title.toLowerCase().includes(searchText.toLowerCase()));
	}

	return (				
            <FavoritesContext.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
                <UserContext.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}>
                    <SearchContext.Provider value={{
                        posts: posts,
                        text: searchText,
                        setText: changeText,
                        setPosts: setPosts,
                        search: searchHandler
                    }}>						  		
									<div className='container'>
									<Header />
									<Main updFav={updFav} />
									<Footer />			
									</div>								
                    </SearchContext.Provider>
                </UserContext.Provider>
            </FavoritesContext.Provider>
	)
}

export default Home;