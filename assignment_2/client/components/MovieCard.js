import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from '../styles/Home.module.css';

const MovieCard = (props) => {

    const { movie } = props

    return (
        <Card className={styles.movieCardWrapper}>
            <Card.Img variant="top" src={`https://source.unsplash.com/random/298x180/?${movie.name}`} />
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text className='mb-1 fs-18'>{`Rating: ${movie.rating}`}</Card.Text>
                <p className='mb-0 fs-18'>
                    <span className='fw-5'>Released Date: </span>
                    <span>{movie.released_date}</span>
                </p>
            </Card.Body>
        </Card>
    )
}

export default MovieCard