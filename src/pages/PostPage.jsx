import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../API';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import PostEditable from '../components/PostEditable';


const PostPage = () => {	
	let {id} = useParams();		
	const [post, setPost] = useState({});
	const [author, setAuthor] = useState({});		
	const [editMode, setEditMode] = useState(false);  
	
		function handleEditComplete(result) {
			 console.log("handleEditComplete", result);
			 if (result != null) {
				  setName(result.name);				  
				  setAbout(result.about);
				  setAvatar(result.avatar);
			 }        
			 setEditMode(false);
		}

	useEffect(() => {
		api.getSinglePost(id).then(data => {			
			setPost(data);
			setAuthor(data.author)					
			})			
	}, []);		
		

	function handleEditComplete(result) {
		console.log("handleEditComplete", result);
		if (result != null) {
			 setTitle(result.title);				  
			 setText(result.text);
			 setImage(result.image);
			 setTags(result.tags);
		}        
		setEditMode(false);
  }
  
	return (		
		<>
			<Header />
			{editMode ? <PostEditable editCompleteCallback={handleEditComplete} post={post} id={id}/>
						: <Post startEditCallback={() => setEditMode(true)} post={post} author={author}/>	
			} 
			<Footer />
		</>
	)
}

export default PostPage;