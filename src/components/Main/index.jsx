import React, { useState, useEffect, useContext	} from "react";
import { Link } from 'react-router-dom';
import "./index.css";
import api from '../../API';

import PostPreviewCard from "../PostPreviewCard";

import { usePagination } from "../../hooks";
import { SearchContext } from '../../context/SearchContext';
import { FavoritesContext } from "../../context/FavoritesContext";

const Main = ({updFav}) => {		
	const {posts, text, search} = useContext(SearchContext);
	const { setFavorites } = useContext(FavoritesContext);

	const paginationData = usePagination(search(posts, text), 10);
	const [page, setPage] = useState(1);	
	function setPagination(e) {
		let array = [];
		for (let i=0; i < e; i++) {
			array.push(<div 
				className={(i+1) === page ? "active" : ""} 
				key={i} 
				onClick={() => {setPage(i+1); paginationData.jump(i+1)}}
			>{i+1}</div>);
		}
		return array;
	}

	useEffect(() => {
		let token = localStorage.getItem("token");
		if (token) {
			 api.token = token;
		}
		let user = localStorage.getItem("user");		
			updFav(paginationData.current().filter(el => el.likes.includes(user)));				  
  }, []);  
	
	return (		
		<>			
			{text && <div className="search__info">По запросу <b>{text}</b> найден(-о) {search(posts, text).length} пост(-ов).</div>}	

			<div className="posts-container">			
			{paginationData.current().map(el => (					
						<>
							<PostPreviewCard key={el._id} id={el._id} title={el.title} text={el.text.length < 300 ? el.text : el.text.substring(0, 300) + "..."} image={el.image} created_at={el.created_at.substring(0, 10)} tags={el.tags} likes={el.likes} />
							<hr />
						</>
			))}
			</div>

			<div className='page-container'>
				{setPagination(paginationData.maxPage)}
			</div>
		</>
	)
}

export default Main;