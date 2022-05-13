import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../API';
import "./index.css";


const ProfileEditable = ({profile, editCompleteCallback}) => {	
	const navigation = useNavigate();
    const [name, setName] = useState(profile.name);    
    const [about, setAbout] = useState(profile.about);
    const [avatar, setAvatar] = useState(profile.avatar);
   

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({name, about, avatar});
    }

	 const handler = (e) => {
		e.preventDefault();		
		api.redactProfileText({name: name, about: about}).then(ans => {			
			console.log(ans);				
		})		
		api.redactProfileAvatar({avatar: avatar}).then(ans => {			
			console.log(ans);				
		})	
		navigation("/");
	}	
    
    
    return (
		<form className="set-profile" onSubmit={handler}>
				<div>            
					<h3>Ссылка на аватар:</h3>
					<input type="text" value={avatar} onChange={e => setAvatar(e.target.value)} />
			</div>
			<div>            
					<h3>Введите имя и фамилию:</h3>
					<input type='text' value={name} onChange={e => setName(e.target.value)} />
			</div>
			<div>            
					<h3>О себе:</h3>                       
					<textarea type='text' value={about} onChange={e => setAbout(e.target.value)} />
			</div>        
			
					<button className='default__bttn' type='submit' onClick={handleSaveClicked}>Сохранить</button>
					<button className='default__bttn' onClick={handleCancelClicked}>Отмена</button>
			
		</form>
	)
}

export default ProfileEditable;