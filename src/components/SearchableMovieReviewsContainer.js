import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'VGbdIzuulPIL66CHip44p39AXyLwUQGk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
	constructor() {
		super()

		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}

	handleSubmit = event => {
		event.preventDefault()

		fetch(URL + `&query=${this.state.searchTerm}`)
		.then(resp => resp.json())
		.then(reviewData => this.setState({ reviews: reviewData.results }))
		.catch(error => {
			console.error('Error:', error)
		})
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
					<h1>Search for movie reviews:</h1>
					<input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
					<button>Search</button>
				</form>
				<div className="searchable-movie-reviews">
					<MovieReviews reviews={this.state.reviews}/>
				</div>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer
