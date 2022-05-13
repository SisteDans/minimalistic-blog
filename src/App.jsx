import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import NewPost from './pages/NewPost';
import UserProfile from './pages/UserProfile';
import MyPosts from './pages/MyPosts';
import Favorites from './pages/Favorites';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PostPage from './pages/PostPage';

const App = () => {	

	return (
		<div className="all_container">			
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/newpost' element={<NewPost />} />									
				<Route path='/profile' element={<UserProfile />} />
				<Route path='/my_posts' element={<MyPosts />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path="/signin" element={<Signin/>}/>
				<Route path="/signup" element={<Signup/>}/>
				<Route path='/post/:id' element={<PostPage />} />
			</Routes>				
		</div>
		
	)
}

export default App;