// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
	<div className="review-list">
		{reviews.map((review, idx) => <div className="review" key={idx}>
			<a href={review.link.url} target="_blank">{review.display_title}</a>
		</div>)}
	</div>
)

export default MovieReviews
