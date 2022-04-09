import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import RightPic from './components/RightPic';

const App = () => {
	return (
		<div className="all_container">
			<Header />
			<Main />
			<Footer />
			<RightPic />
		</div>
		
	)
}

export default App;