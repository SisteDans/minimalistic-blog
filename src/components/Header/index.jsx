import React from "react";
import './index.css';

const Header = () => {
	return (
		<header>			
			<nav>
				<a href="#">Главная</a>
				<a href="#">Создать пост</a>
				<a href="#">Профиль</a>
			</nav>
			<div className="logo"><h1>Полёт мыслей в стратостферу</h1></div>
		</header>
	)
}

export default Header;