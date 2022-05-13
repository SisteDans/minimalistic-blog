import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css';
import Search from "../Search";

const Header = ({searchText, changeText}) => {	
	return (
		<header>			
			
		{ localStorage.getItem("token") ? <nav>				
				<NavLink exact activeClassName="activeNavItem" to="/newpost">Создать пост</NavLink>
				<NavLink exact activeClassName="activeNavItem" to="/profile">Профиль</NavLink>
				<NavLink exact activeClassName="activeNavItem" to="/favorites">Избранное</NavLink>
				<NavLink exact activeClassName="activeNavItem" to="/my_posts">Мои посты</NavLink>
				<Search searchText={searchText} changeText={changeText} />
			</nav>				
		:	<nav>								
				<Link to="/signin">Авторизация</Link>				
				<Search searchText={searchText} changeText={changeText} />
			</nav>}			
			<Link to="/"><div className="logo"><h1>Life Among Almond Blossoms</h1></div></Link>
		</header>
	)
}

export default Header;