import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../API';
import "./index.css";


const PostEditable = ({id, post, editCompleteCallback}) => {	
	const navigation = useNavigate();
    const [title, setTitle] = useState(post.title);    
    const [text, setText] = useState(post.text);
    const [image, setImage] = useState(post.image);
    const [tags, setTags] = useState(post.tags);
   

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({title, text, image, tags});
    }

	 const handler = (e) => {
		e.preventDefault();	
		const tagsMass = tags.split(", ");	
		api.redactPost(id, {title: title, text: text, image: image, tags: tagsMass}).then(ans => {			
			console.log(ans);				
		})				
		navigation("/");
	}	
    
    
    return (
		<form className="set-profile" onSubmit={handler}>
				<div>            
					<h3>Заголовок:</h3>
					<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
			</div>
			<div>            
					<h3>Текст:</h3>
					<textarea type='text' value={text} onChange={e => setText(e.target.value)} />
			</div>
			<div>            
					<h3>Прикрепите картинку:</h3>                       
					<input type='text' value={image} onChange={e => setImage(e.target.value)} />
			</div>     
			<div>            
					<h3>Теги через запятую:</h3>                       
					<input type='text' value={tags} onChange={e => setTags(e.target.value)} />
			</div>    
			<div className="set-profile__bttns">
					<button className='default__bttn' type='submit' onClick={handleSaveClicked}>Сохранить</button>
					<button className='default__bttn' onClick={handleCancelClicked}>Отмена</button>
			</div>
		</form>
	)
}

export default PostEditable;