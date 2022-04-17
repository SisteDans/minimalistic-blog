import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';

const App = () => {
	return (
		<div className="all_container">			
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/newpost' element={<NewPost />} />
				<Route path='/profile' element={<Profile />} />				
			</Routes>						
		</div>
		
	)
}

export default App;