import React, { useState, useEffect, useContext	} from "react";
import api from '../API';
import PostPreviewCard from "../components/PostPreviewCard";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MyPosts = () => {		
	const [posts, setPosts] = useState([]);
	const id = localStorage.getItem("user");

	useEffect(() => {		 		 
		api.getPostsList().then(data => {			
		  setPosts(data.filter(post => post.author._id == id));		  
		  });	  
  }, []);	
		
	return (		
		<>	
			<Header />		
			<p style={{fontSize:25, fontWeight:600, marginTop:0}}>Мои посты</p>
			<div className="posts-container">						
			{posts.reverse().map(el => (					
						<>
							<PostPreviewCard key={el._id} id={el._id} title={el.title} text={el.text.length < 300 ? el.text : el.text.substring(0, 300) + "..."} image={el.image} created_at={el.created_at.substring(0, 10)} tags={el.tags} likes={el.likes} />
							<hr />
						</>
			))}
			</div>
			<Footer />					
		</>
	)
}

export default MyPosts;