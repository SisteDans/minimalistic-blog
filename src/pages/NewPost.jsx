import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../API';

import Header from '../components/Header';
import Footer from '../components/Footer';

const NewPost = () => {	
	const navigation = useNavigate();
	const [title, changeTitle] = useState("");
	const [text, changeText] = useState("");
	const [image, changeImage] = useState("");
	const [tags, changeTags] = useState([]);
	
	const handler = (e) => {
		e.preventDefault();
		const tagsMass = tags.split(", ");
		api.setNewPost({title: title, text: text, image: image, tags: tagsMass}).then(ans => {			
			console.log(ans);	
			navigation("/");
		})		
	}	

	return (		
		<>
			<Header />			
			<h2>Создать новый пост</h2>
			<form className="new-post" onSubmit={handler}>							
				<input type="text" placeholder='Введите заголовок' name="title" value={title} onInput={e => changeTitle(e.target.value)} required />
				<textarea type="text" placeholder='Напишите пост' name="text" value={text} onInput={e => changeText(e.target.value)} required />
				<input type="text" placeholder='Добавьте картинку' name="image" value={image} onInput={e => changeImage(e.target.value)} />
				<input type="text" placeholder='Добавьте теги через запятую' name="tags" value={tags} onInput={e => changeTags(e.target.value)} />
				<button type='submit' className='default__bttn'>Опубликовать</button>
			</form>
			<Footer />
			
		</>
	)
}

export default NewPost;