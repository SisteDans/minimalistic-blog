import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewPost = () => {	
	return (		
		<>
			<Header />
			<h1>Пост</h1>
			<input type="text" placeholder='Введите заголовок'/>
			<input type="text" placeholder='Напишите пост'/>
			<button>Опубликовать</button>
			<Footer />
			
		</>
	)
}

export default NewPost;