import React from 'react';
import {Card} from 'react-bootstrap'



const MovieCard = ({movie}) => {
  console.log(movie)
    return (
        <div>
            <Card style={{ width: '18rem', height:"600px", marginTop: "30px", backgroundColor:"	#d2691e" }}>
  <Card.Img style={{width:"287px", height:"350px"}} variant="top" src={movie.posterUrl}/> 
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard