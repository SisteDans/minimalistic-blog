import React, { useState, useEffect, useContext } from 'react';
import api from '../API';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile'
import ProfileEditable from '../components/ProfileEditable'

const UserProfile = () => {	
	const [editMode, setEditMode] = useState(false);  
	const [profile, setProfile] = useState({});

	useEffect(() => {
		api.getProfile().then(data => {			
			setProfile(data);
			})
	}, []);	

		function handleEditComplete(result) {
			 console.log("handleEditComplete", result);
			 if (result != null) {
				  setName(result.name);				  
				  setAbout(result.about);
				  setAvatar(result.avatar);
			 }        
			 setEditMode(false);
		}

	return (		
		<>
			<Header />
			{editMode ? <ProfileEditable editCompleteCallback={handleEditComplete} profile={profile}/>
						: <Profile startEditCallback={() => setEditMode(true)} profile={profile}/>	
			} 
			<Footer />			
		</>
	)
}

export default UserProfile;