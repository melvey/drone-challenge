import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';
import DroneGraphic from '../drone_graphic/drone_graphic.jsx';

function DroneResults(props) {
	const {path, photos, unique, drones, numPhotos} = props.results;
	console.log('style', style);

	return (<div className={style.results}>
		<h2>Drone Results</h2>
		<ul>
			<li>{`Total Photographs: ${numPhotos}`}</li>
			<li>{`Unique Photographs: ${unique}`}</li>
			<li>{`Number of drones: ${drones}`}</li>
			<li className={style.path} ><span>Path: </span><span className={style.pathField}>{path}</span></li>
		</ul>
		<h3>Photo locations</h3>
		<DroneGraphic photos={photos} drones={drones} />
	</div>);
}

DroneResults.propTypes = {
	results: PropTypes.shape({
		path: PropTypes.string,
		photos: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		numPhotos: PropTypes.number,
		unique: PropTypes.number,
		drones: PropTypes.number
	})
};

export default DroneResults;
