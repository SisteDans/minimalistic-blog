import React from "react";
import "./index.css"

const PostPreviewCard = (props) => {
	return (
		<div className="preview__card">
			<div className="card__title"><h3>{props.title}</h3></div>
			<div className="card__text">{props.text.substring(0,120) + "..."}</div>
			<div className="card__date">{props.date}</div>
		</div>
	)
}

export default PostPreviewCard;