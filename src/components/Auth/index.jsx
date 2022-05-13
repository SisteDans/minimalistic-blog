import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import api from '../../API';
import { UserContext } from '../../context/UserContext';

import Header from '../Header';
import Footer from '../Footer';

export default ({login}) => {
	const [email, changeEmail] = useState("");
	const [psswrd, changePsswrd] = useState("");
	const { setUser, setToken } = useContext(UserContext);
	const navigation = useNavigate();

	const handler = (e) => {
		e.preventDefault();
		if (login) {
			api.signin({email: email, password: psswrd}).then(ans => {
				console.log(ans);
				if (ans.data) {
					setUser(ans.data._id);
					setToken(ans.data.token);
					localStorage.setItem("user", ans.data._id);
					localStorage.setItem("token", ans.token);
				}
				navigation("/");
			})
		} else {
				api.signup({email: email, password: psswrd}).then(ans => {
				console.log(ans);
				navigation("/signin");
		})
		}
	}	

	return (		
		<div>
			<Header />			
			<form className="auth" onSubmit={handler}>
				<h2>{login ? "Вход" : "Регистрация"}</h2>
				<input type="email" placeholder="Введите адрес электронной почты" name="email" value={email} required onInput={e => changeEmail(e.target.value)} />
				<input type="password" placeholder="Введите пароль" name="password" value={psswrd} required onInput={e => changePsswrd(e.target.value)} />
				<div className='sign__bttns'>
					<button type='submit'>{login ? "Войти" : "Зарегистрироваться"}</button>
					<Link to={login ? "/signup" : "/signin"}><button type='button'>{login ? "Регистрация" : "Вход"}</button></Link>			
				</div>
			</form>
			<hr />
			<Footer />
		</div>
	)
}