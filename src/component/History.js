import React from 'react';
import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import AnimeCard from './AnimeCard';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseConfig from '../firebase';
import Header from './Header';
import { useEffect } from 'react';

export default function History() {
	const { user } = useUserAuth();
	const [savedAnime, setSavedAnime] = useState([]);
	useEffect(() => {
		const db = getDatabase(firebaseConfig);
		const dbRef = ref(db, `user/${user.uid}/`);
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();

			setSavedAnime(data);
		});
	}, []);

	return (
		<>
			<Header></Header>
			<div className='content'>
				<main>
					<div className='animeList history'>
						{savedAnime ? (
							Object.keys(savedAnime).map((keyName, i) => (
								<AnimeCard likedAnime={savedAnime[keyName]} />
							))
						) : (
							<>There is nothing here!</>
						)}
					</div>
				</main>
			</div>
		</>
	);
}
