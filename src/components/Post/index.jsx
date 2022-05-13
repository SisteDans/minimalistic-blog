import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import "./index.css";

import holder from "../PostPreviewCard/img/holder.png"

const Post = ({post, author, startEditCallback}) => {	
	const user = localStorage.getItem("user");
	
	const postTags = [];
	if (post.tags) {				
		for (var i=0; i < post.tags.length; i++) {
		postTags.push(<div className="oneTag">{post.tags[i]}</div>);		
		}
	}	

	const handler = (e) => {
		e.preventDefault();
		api.deletePost(e);	
		navigation("/");		
	}
	
    return ( 	 	
        <div className='post'>
					<h2>{post.title}</h2>													
					<p>{post.text}</p>			
					<img className='post__pic' src={post.image ? post.image : holder} />
					<div className='tags'>{postTags}</div>				
					<div>{post.created_at}</div>	
					{
						author._id === user && <div>
															<button className="default__bttn" onClick={handler} id={post._id}>Удалить пост</button>
															<button className="default__bttn" onClick={startEditCallback}>Редактировать пост</button>
														</div>
					}								
					
					<hr />
			</div>
  )
}

export default Post;