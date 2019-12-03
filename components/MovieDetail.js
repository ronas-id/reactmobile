import React from 'react';
import {
	Text,
	Image,
	ScrollView, 
	View,
 } from 'react-native';
import Stars from 'react-native-stars';
import Card from './Card';
import CardItem from './CardItem';
import Tag from './Tag';

const MovieDetail = (props) => {
	const { title, image, rating, releaseYear, genre } = props.movie;
	const { 
		titleStyle, 
		releaseYearStyle,
		ratingStyle,
		imageStyle,
		} = styles;
	return (
		<Card>
			<CardItem direction={'column'}>
				<Text style={titleStyle}>{title}</Text>
				<Text style={releaseYearStyle}>{releaseYear}</Text>
				<View style={ratingStyle}>
					<Stars
						value={rating}
						spacing={0}
						count={10}
						starSize={18}
						fullStar={require('../images/full_star.png')}
						emptyStar={require('../images/empty_star.png')}
						halfStar={require('../images/half_star.png')}
						disabled 
					/>
				</View>
			</CardItem>

			<CardItem>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardItem>

			<CardItem>
				<ScrollView
					horizontal
				>
					{genre.map((tag, index) => {
						return (
							<Tag key={index} text={tag} />
							);
						})
					}	
				</ScrollView>
			</CardItem>
		</Card>
	);
};

const styles = {
	titleStyle: {
		color: '#000',
		fontSize: 18,
		fontWeight: 'bold',
	},
	releaseYearStyle: {
		color: '#000',
		fontSize: 14,
	},
	ratingStyle: {
		alignItems: 'flex-start',
	},
	imageStyle: {
		flex: 1,
		height: 300,
	},
};

export default MovieDetail;