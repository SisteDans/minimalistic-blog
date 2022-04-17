import React from "react";
import { Link } from 'react-router-dom';
import "./index.css";
import PostPreviewCard from "../PostPreviewCard";
import data from "../../data.json";

const Main = () => {	

	let FromTheEnd = data.reverse();

	return (
		<main>
			<div className="container">
			{FromTheEnd.map(el => (
				<Link to={"/post/" + el.id} key={el.id}>
					<PostPreviewCard title={el.title} key={el.id} text={el.text} date={el.date} />				
				</Link>
			))}
			</div>
		</main>
	)
}

export default Main;