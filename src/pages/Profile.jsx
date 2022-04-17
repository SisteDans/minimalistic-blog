import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Profile = () => {	
	return (		
		<>
			<Header />
			<h1>Профиль</h1>
			<table>
				<tbody>
					<td>
						<tr>						
						Имя
						</tr>
						<tr>
						Фамилия
						</tr>
						<tr>
						Возраст
						</tr>
						<tr>
						Страна
						</tr>
					</td>
					<td>
						<tr>						
						Индира
						</tr>
						<tr>
						Абдуллина
						</tr>
						<tr>
						28
						</tr>
						<tr>
						Россия
						</tr>
					</td>
				</tbody>
			</table>
			<Footer />			
		</>
	)
}

export default Profile;