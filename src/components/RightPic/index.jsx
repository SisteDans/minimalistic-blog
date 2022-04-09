import React from "react";
import './index.css';
import forest from './img/forest.png';

const RightPic = () => {
	let pic = {
		backgroundImage: `url(${forest})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",		
	};
	return (		
			<div className="side__pic" style={pic}></div>			
	)
}

export default RightPic;