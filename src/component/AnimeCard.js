import React from 'react';

const AnimeCard = ({ anime }) => {
	//takes data from Main api call to return a card
	return (
		<article className='animeCard'>
			<a href={anime.url} target='_blank' rel='noreferrer'>
				<figure>
					<img src={anime.images.jpg.large_image_url} alt='anime' />
				</figure>
				<div className='info'>
					<h3>
						{anime.title} ||<br></br> {anime.title_japanese}
					</h3>
					<p>{anime.synopsis}</p>
				</div>
			</a>
			{/* working on button */}
			<button buttonKey={anime.mal_id}>
				{/* <button buttonId={anime.mal_id} onClick={AddToList}> */}
				Add To List
			</button>
		</article>
	);
};

export default AnimeCard;
