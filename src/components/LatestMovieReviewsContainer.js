import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'VGbdIzuulPIL66CHip44p39AXyLwUQGk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
	constructor() {
		super()

		this.state = {
			reviews: []
		}
	}

	componentDidMount() {
		fetch(URL)
		.then(resp => resp.json())
		.then(reviewData => this.setState({ reviews: reviewData.results }))
		.catch(error => {
			console.error('Error:', error);
		})
	}

	render() {
		return (
			<div className="latest-movie-reviews">
				<h1>Latest reviews!</h1>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default LatestMovieReviewsContainer
