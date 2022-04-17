import React from 'react';
import data from '../data.json';

const Post = () => {		
	return (		
		<>
			<h1>{data.title || "Холдер"}</h1>			
			<p>{data.text}</p>
			<p>{data.date}</p>
		</>
	)
}

export default Post;