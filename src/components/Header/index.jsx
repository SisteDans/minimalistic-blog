import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Header = () => {
	return (
		<header>			
			<nav>
				<Link to="/">Главная</Link>
				<Link to="/newpost">Создать пост</Link>
				<Link to="/profile">Профиль</Link>
			</nav>
			<div className="logo"><h1>Полёт мыслей в стратостферу</h1></div>
		</header>
	)
}

export default Header;