import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList
 } from 'react-native';
import API from '../api/API';
import MovieDetail from './MovieDetail';

class MoviesList extends Component {
	state = {
		movies: [],
	};

	componentDidMount() {
		this.getMoviesFromApiAsync();
	}

	getMoviesFromApiAsync() {
		return fetch(API.MOVIES)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					movies: responseJson
				});
				return responseJson;
			})
			.catch((error) => {
				console.error(error);
			});
  }

	renderMovie = ({ item, index }) => { // eslint-disable-line
		return (
			<MovieDetail movie={item} />
		);
	};

	keyExtractor = (item, index) => index;

	render() {
		const { movies } = this.state;
		return (
			<FlatList
				style={styles.listStyle}
				data={movies}
				keyExtractor={this.keyExtractor}
				renderItem={this.renderMovie}
			/>
		);
	}
}

const styles = {
	listStyle: {
		marginBottom: 10,
	}
};

export default MoviesList;