import React, { useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";
import api from "../../API";
import holder from "./img/holder.png";

import likeTrue from "../../assets/like_fill.svg";
import likeFalse from "../../assets/like_stroke.svg";
import { FavoritesContext } from "../../context/FavoritesContext";

const PostPreviewCard = (props) => {
	const navigate = useNavigate();
	const {setFavorites} = useContext(FavoritesContext);
	const user = localStorage.getItem("user");
	const [like, setLike] = useState(props.likes.includes(user));

	const st = {
		backgroundImage: `url(${props.image ? props.image : holder})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundColor: "white",
		width: "200px",
		height: "200px"
	}

	const likeHandler = (e) => {		
		e.stopPropagation();
		setLike(!like);			
		api.setPostLike(props.id, like)
			 .then(ans => {
				  console.log(ans);
				  setFavorites(ans);
			 });
		
  }

	let postTags = [];
	for (var i=0; i < props.tags.length; i++) {
		postTags.push(<div className="oneTag">{props.tags[i]}</div>);		
	}	

	const replaceHandler = (e) => {
		navigate(`/post/${props.id}`);
  }

	return (
		<>
			<div className="post-preview" onClick={replaceHandler}>
				<div className="post-preview__pic" style={st}></div>
				<div className="post-preview__title"><h3>{props.title}</h3></div>
				<div className="post-preview__text">{props.text}</div>
				<div className="post-preview__date">{props.created_at}</div>
				<div className="tags">{postTags}</div>
				<img className="likes" src={like ? likeTrue : likeFalse} onClick={likeHandler}/>				
			</div>			
		</>
	)
}

export default PostPreviewCard;