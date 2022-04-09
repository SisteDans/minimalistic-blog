import React from "react";
import "./index.css";
import PostPreviewCard from "../PostPreviewCard";
import data from "../../data.json";

const Main = () => {
	let dataFirstThree = data.slice(-3).reverse();
	return (
		<main>
			<div className="container">
			{dataFirstThree.map(el => <PostPreviewCard title={el.title} key={el.id} text={el.text} date={el.date} />)}				
			</div>
		</main>
	)
}

export default Main;