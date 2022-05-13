import React, { useState, useContext } from "react";
import './index.css';
import close from "./img/close.svg";
import icon from "./img/search.svg";
import { SearchContext } from "../../context/SearchContext";


const Search = () => {
	const {text, setText} = useContext(SearchContext);
	const [val, updateVal] = useState(text); 	
	const changeText = (e) => {
		updateVal(e.target.value); 
		setText(e.target.value);
	}
	const clearText = function() {
		updateVal("");
		setText("");
	}
	return (
		<form>
			<input type="text" className="search" value={val} onInput={changeText} placeholder="Поиск" />
			<button className="search__btn" type="button">
				{val ? <img src={close} onClick={clearText}></img> : <img src={icon}></img>}
			</button>
		</form>
	)
}

export default Search;