import React from 'react';
import { useNavigate } from "react-router-dom";
import "./index.css";

const Profile = ({profile, startEditCallback}) => {	
	const navigation = useNavigate();
	
	const exit = function () {	
		localStorage.clear();			
		navigation("/");
	}
	
    return ( 
	 	<>
        <div className='profile'>				
					<img className='profile__pic' src={profile.avatar}/>				
					<p className='profile__name' id="profile__name">{profile.name}</p>					
					<p className='profile__about'>«{profile.about}»</p>
					<button className='default__bttn edit-profile' onClick={startEditCallback}>Изменить</button>	
			<button className='default__bttn exit-profile' onClick={exit}>Выйти</button>
			</div>							
			<hr />
		</>
  )
}

export default Profile;